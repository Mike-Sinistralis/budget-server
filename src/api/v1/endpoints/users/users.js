import express from 'express';

import { NotFoundError, BadRequestError } from '../../../../utils/errors';

function usersApi()
{
  var router = express.Router();

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

  function createUsers(req, res, next)
    {
      try {
          req.users = users;
          next();
        }
        catch (err)
        {
          next(err);
        }
    }

  function findUsersById(req, res, next)
    {
      try {
          if (!req.params.id)
            {
              return next(new BadRequestError('No Users Id specified.'));
            }
          req.users = { name: "findUsersById" };
          if (!req.users)
            {
              return next(new NotFoundError('Users not found'));
            }
          next();
        }
        catch (err)
        {
          next(err);
        }
    }

  function updateUsers(req, res, next)
    {
      try {
          req.users = { name: "updateUsers" };
          next();
        }
        catch (err)
        {
          next(err);
        }
    }

  function deleteUsers(req, res, next)
    {
      try {
          req.users = { name: "deleteUsers" };
          res.sendStatus(204);
        }
        catch (err)
        {
          next(err);
        }
    }

  function returnUsers(req, res)
    {
      res.json(req.users);
    }

  return router;
}

export default usersApi;
