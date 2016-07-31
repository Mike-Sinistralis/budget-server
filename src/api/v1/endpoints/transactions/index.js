import express from 'express';
import { BadRequestError } from '../../../../utils/errors';
import {
  createTransaction,
  getTransaction,
  getTransactionsByRange,
  updateTransaction,
  deleteTransaction } from './transactionsModel';

const transactions = {};

function create(req, res, next) {
  return createTransaction(req.body)
    .then((r) => {
      const key = r.path.key;
      req.body.key = key;
      transactions[key] = req.body;
      req.transaction = r;
      next();
    })
    .fail(err => next(err));
}

// Return 10 transactions
function findTransactions(req, res, next) {
  return getTransactionsByRange()
    .then((r) => {
      req.transaction = r.body.results;
      next();
    })
    .fail(err => next(err));
}

function findTransactionByKey(req, res, next) {
  if (req.params.key in transactions) {
    req.transaction = transactions[req.params.key];
    return next();
  }
  return getTransaction(req.params.key)
    .then((r) => {
      const transaction = r.body;
      transaction.key = req.params.key;
      req.transaction = transaction;
      next();
    })
    .fail(err => next(err));
}

function updateByKey(req, res, next) {
  return updateTransaction(req.params.key, req.body)
    .then(() => next())
    .fail(err => next(err));
}

function deleteByKey(req, res, next) {
  if (!req.transaction) {
    return next(new BadRequestError('No transaction found by key'));
  }
  delete transactions[req.params.key];
  return deleteTransaction(req.params.key)
    .then(() => next())
    .fail((err) => next(err));
}

function validateKey(req, res, next) {
  if (!req.params.key) {
    return next(new BadRequestError('No transaction key specified.'));
  }
  return next();
}

function returnTransaction(req, res) {
  res.json(req.transaction);
}

function returnSuccess(req, res) {
  res.json({ result: 'Deleted transaction' });
}

function transactionApi() {
  const router = express.Router({ mergeParams: true });

  router.post('/',
    create,
    returnTransaction
  );

  router.get('/',
    findTransactions,
    returnTransaction
  );

  router.get('/:key',
    validateKey,
    findTransactionByKey,
    returnTransaction
  );

  router.put('/:key',
    validateKey,
    updateByKey,
    findTransactionByKey,
    returnTransaction
  );

  router.delete('/:key',
    validateKey,
    findTransactionByKey,
    deleteByKey,
    returnSuccess
  );

  return router;
}

export default transactionApi;
