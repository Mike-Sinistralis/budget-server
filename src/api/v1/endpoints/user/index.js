import express from 'express';
import orchestrate from 'orchestrate';

import { NotFoundError, BadRequestError } from '../../../../utils/errors';

const db = orchestrate('053be91e-740d-480b-893e-81d8f4af7aeb');

function create(req, res, next) {

}

function findUserById(req, res, next) {
  db.get('users', 'barric')
    .then( (user) => {
      req.user = user.body;
      next();
    })
    .fail( (err) => next(err));
}

function update(req, res, next) {

}

function remove(req, res, next) {

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
