import express from 'express';

import { NotFoundError, BadRequestError } from '../../../../utils/errors';

function createUsers(req, res, next) {
  try {
    // TODO: This needs to create a new user
    req.users = users;
    next();
  } catch (err) {
    next(err);
  }
}

function findUsersById(req, res, next) {
  try {
    if (!req.params.id) {
      return next(new BadRequestError('No Users Id specified.'));
    }

    req.users = { name: 'findUsersById' };

    if (!req.users) {
      return next(new NotFoundError('Users not found'));
    }

    return next();
  } catch (err) {
    return next(err);
  }
}

function updateUsers(req, res, next) {
  try {
    req.users = { name: 'updateUsers' };
    next();
  } catch (err) {
    next(err);
  }
}

function deleteUsers(req, res, next) {
  try {
    req.users = { name: 'deleteUsers' };
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

function returnUsers(req, res) {
  res.json(req.users);
}

function usersApi() {
  const router = express.Router();

  router.post('/',
    createUsers,
    returnUsers
  );

  router.get('/:id',
    findUsersById,
    returnUsers
  );

  router.put('/:id',
    findUsersById,
    updateUsers,
    returnUsers
  );

  router.delete('/:id',
    findUsersById,
    deleteUsers
  );

  return router;
}

export default usersApi;
