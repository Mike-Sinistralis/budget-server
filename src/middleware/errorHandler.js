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

const ErrorHandlers = {

};

function defaultHandler(err) {
  const status = err.status || 500;
  let errors = Array.isArray(err) ? err : [err];

  if (status === 500) {
    console.error(err.stack);
    errors = [{ message: 'Internal Server Error' }];
  }

  return { status, errors };
}

function baseErrorHandler(err, req, res) {
  const errorHandler = ErrorHandlers[err.name] || defaultHandler;
  const { status, errors } = errorHandler(err);
  res.status(status).json({ errors });
}

export default baseErrorHandler;
