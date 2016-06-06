import express from 'express';

import users from './endpoints/users';
import transactions from './endpoints/transactions';
import auth from './endpoints/auth';

export default function () {
  const router = express.Router();

  router.use('/users', users());
  router.use('/transactions', transactions());
  router.use('/auth', auth());

  return router;
}
