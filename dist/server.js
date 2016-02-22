'use strict';

Object.defineProperty(exports, '__esModule', {
	  value: true
});
exports.startServer = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _middleware = require('./middleware/middleware');

var _index = require('./api/v1/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startServer() {
	  var app = (0, _express2.default)();
	  var port = 3010;

	  app.use((0, _cors2.default)());
	  app.use((0, _bodyParser.urlencoded)({ extended: true }));
	  app.use((0, _bodyParser.json)());
	  app.use((0, _cookieParser2.default)());

	  app.use('/v1', (0, _index2.default)());
	  app.use(_middleware.notFoundHandler);
	  app.use(_middleware.errorHandler);

	  app.listen(port);
	  console.log('Server listening on port ' + port);
}

exports.startServer = startServer;
