"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _errors = require("../utils/errors");

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notFoundError(req, res, next) {
	return next(new _errors2.default.NotFound("The api route specified was not found."));
}

exports.default = notFoundError;