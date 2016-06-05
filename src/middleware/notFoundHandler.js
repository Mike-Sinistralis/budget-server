import errors from '../utils/errors';

function notFoundError(req, res, next) {
  next(new errors.NotFound('The api route specified was not found.'));
}

export default notFoundError;
