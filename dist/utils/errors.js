'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundError = function (_Error) {
  _inherits(NotFoundError, _Error);

  function NotFoundError(msg) {
      _classCallCheck(this, NotFoundError);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NotFoundError).call(this, msg));

      _this.message = msg || 'Not Found';
      _this.status = 404;
      Error.captureStackTrace(_this);
      return _this;
    }

  return NotFoundError;
}(Error);

var ForbiddenError = function (_Error2) {
  _inherits(ForbiddenError, _Error2);

  function ForbiddenError(msg) {
      _classCallCheck(this, ForbiddenError);

      var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ForbiddenError).call(this, msg));

      _this2.message = msg || 'Forbidden';
      _this2.status = 403;
      Error.captureStackTrace(_this2);
      return _this2;
    }

  return ForbiddenError;
}(Error);

var UnauthorizedError = function (_Error3) {
  _inherits(UnauthorizedError, _Error3);

  function UnauthorizedError(msg) {
      _classCallCheck(this, UnauthorizedError);

      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(UnauthorizedError).call(this, msg));

      _this3.message = msg || 'Unauthorized';
      _this3.status = 401;
      Error.captureStackTrace(_this3);
      return _this3;
    }

  return UnauthorizedError;
}(Error);

var BadRequestError = function (_Error4) {
  _inherits(BadRequestError, _Error4);

  function BadRequestError(msg) {
      _classCallCheck(this, BadRequestError);

      var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(BadRequestError).call(this, msg));

      _this4.message = msg || 'Bad Request';
      _this4.status = 400;
      Error.captureStackTrace(_this4);
      return _this4;
    }

  return BadRequestError;
}(Error);

exports.default = { UnauthorizedError: UnauthorizedError, BadRequestError: BadRequestError, ForbiddenError: ForbiddenError, NotFoundError: NotFoundError };
