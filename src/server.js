import express from 'express';
import passport from 'passport';
import { urlencoded, json } from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';

import loadPassportStrategies from './config/passport';
import { notFoundHandler, baseErrorHandler } from './middleware/middleware';
import firstApiVersion from './api/v1/index';

function startServer() {
  const app = express();
  const port = 3110;
  loadPassportStrategies(passport);

  app.use(cors());
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cookieParser());

  app.use(session({
    secret: 'its dangerous to go alone take this',
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.options('*', cors());
  app.use('/v1', firstApiVersion());
  app.use(notFoundHandler);
  app.use(baseErrorHandler);

  app.set('port', port);
  app.listen(port);
  console.log(`Server listening on port ${port}`);
}


export { startServer };
