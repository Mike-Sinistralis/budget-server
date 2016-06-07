import express from 'express';
import { createUser, updateUser, getUser, deleteUser } from './userModel';

import { NotFoundError, BadRequestError } from '../../../../utils/errors';

function create(req, res, next) {
  try {
    req.user = createUser(req.body);
    next();
  } catch (err) {
    next(err);
  }
}

function findUserById(req, res, next) {
  try {
    if (!req.params.id) {
      return next(new BadRequestError('No User Id specified.'));
    }

    req.user = getUser(req.params.id);

    if (!req.user) {
      return next(new NotFoundError('User not found'));
    }

    return next();
  } catch (err) {
    return next(err);
  }
}

function update(req, res, next) {
  try {
    req.user = updateUser(req.user, req.body);
    next();
  } catch (err) {
    next(err);
  }
}

function remove(req, res, next) {
  try {
    deleteUser(req.user);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

function returnUser(req, res) {
  res.json(req.user);
}

function userApi() {
  const router = express.Router({ mergeParams: true });

  router.post('/',
    create,
    returnUser
  );

  router.get('/:id',
    findUserById,
    returnUser
  );

  router.put('/:id',
    findUserById,
    update,
    returnUser
  );

  router.delete('/:id',
    findUserById,
    remove
  );

  return router;
}

export default userApi;
