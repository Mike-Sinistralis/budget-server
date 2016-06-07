import express from 'express';

import user from './endpoints/user';
import transactions from './endpoints/transactions';
import auth from './endpoints/auth';

export default function () {
  const router = express.Router();

  router.use('/user', user());
  router.use('/transactions', transactions());
  // router.use('/auth', auth());

  return router;
}
