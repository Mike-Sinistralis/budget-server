'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _errors = require('../../../../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transactionApi() {
  var router = _express2.default.Router();

  router.post('/', createTransaction, returnTransaction);

  router.get('/:id', findTransactionById, returnTransaction);

  router.put('/:id', findTransactionById, updateTransaction, returnTransaction);

  router.delete('/:id', findTransactionById, deleteTransaction);

  function createTransaction(req, res, next) {
      try {
          req.transaction = transaction;
          next();
        } catch (err) {
          next(err);
        }
    }

  function findTransactionById(req, res, next) {
      try {
          if (!req.params.id) {
              return next(new _errors.BadRequestError('No Transaction Id specified.'));
            }
          req.transaction = { name: 'findTransactionById' };
          if (!req.transaction) {
              return next(new _errors.NotFoundError('Transaction not found'));
            }
          next();
        } catch (err) {
          next(err);
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

  return router;
}

exports.default = transactionApi;
