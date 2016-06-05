import express from 'express';

import { NotFoundError, BadRequestError } from '../../../../utils/errors';

function createTransaction(req, res, next) {
  try {
    // TODO: This needs to create a new transaction
    req.transaction = transaction;
    next();
  } catch (err) {
    next(err);
  }
}

function findTransactionById(req, res, next) {
  try {
    if (!req.params.id) {
      return next(new BadRequestError('No Transaction Id specified.'));
    }

    req.transaction = { name: 'findTransactionById' };

    if (!req.transaction) {
      return next(new NotFoundError('Transaction not found'));
    }

    return next();
  } catch (err) {
    return next(err);
  }
}

function updateTransaction(req, res, next) {
  try {
    req.transaction = { name: 'updateTransaction' };
    next();
  } catch (err) {
    next(err);
  }
}

function deleteTransaction(req, res, next) {
  try {
    req.transaction = { name: 'deleteTransaction' };
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

function returnTransaction(req, res) {
  res.json(req.transaction);
}

function transactionApi() {
  const router = express.Router();

  router.post('/',
    createTransaction,
    returnTransaction
  );

  router.get('/:id',
    findTransactionById,
    returnTransaction
  );

  router.put('/:id',
    findTransactionById,
    updateTransaction,
    returnTransaction
  );

  router.delete('/:id',
    findTransactionById,
    deleteTransaction
  );

  return router;
}

export default transactionApi;
