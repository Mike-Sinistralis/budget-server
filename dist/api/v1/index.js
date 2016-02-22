'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.default = function () {
  var router = _express2.default.Router();

  router.use('/routine', (0, _routine2.default)());
  router.use('/transaction', (0, _transaction2.default)());

  return router;
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routine = require('./endpoints/routine/routine');

var _routine2 = _interopRequireDefault(_routine);

var _transaction = require('./endpoints/transaction/transaction');

var _transaction2 = _interopRequireDefault(_transaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
