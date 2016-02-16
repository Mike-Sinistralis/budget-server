'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
const ErrorHandlers = {
    'ErrorName'(args) {
        //do stuff
    },
    'SchemaValidationError'(err) {
        let { errors } = err;

        errors = Object.keys(errors)
            .reduce((memo, key) => {
                return memo.concat(errors[key]);
            }, [])
            .map(err => {
                return { field: err.key, message: err.message };
            });

        return { status: 400, errors };
    }
}
**/

var ErrorHandlers = {};

function defaultHandler(err) {
    var status = err.status || 500;
    var errors = Array.isArray(err) ? err : [err];

    if (status === 500) {
        console.error(err.stack);
        errors = [{ message: 'Internal Server Error' }];
    }

    return { status: status, errors: errors };
}

function baseErrorHandler(err, req, res, next) {
    var errorHandler = ErrorHandlers[err.name] || defaultHandler;

    var _errorHandler = errorHandler(err);

    var status = _errorHandler.status;
    var errors = _errorHandler.errors;

    res.status(status).json({ errors: errors });
}

exports.default = baseErrorHandler;