import express from 'express';

import users from './endpoints/users/users';
import transactions from './endpoints/transactions/transactions';

export default function ()
{
  var router = express.Router();

  router.use('/users', users());
  router.use('/transactions', transactions());

  return router;
}
