/*
import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import user from '../user/userDB';

passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = users.filter((user) => {
      return user.email === username;
    });

    return done(null, user[0]);
  })
);

function onAuth(req, res) {
  res.json(req.user);
  res.sendStatus(200);
}

function authApi() {
  const router = express.Router();

  router.post('/',
    passport.authenticate('local', { session: false }),
    onAuth
  );

  return router;
}

export default authApi;
*/
