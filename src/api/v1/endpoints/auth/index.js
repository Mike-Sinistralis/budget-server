import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import users from '../users/usersDB';

passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = users.filter((user) => {
      return user.email === username;
    });

    return done(null, user[0]);
  })
);

function onAuth(req, res) {
  res.sendStatus(200);
  res.json(req.user);
}

function test(req, res) {
  console.log('hello');
  res.sendStatus(200);
}

function authApi() {
  const router = express.Router();

  router.post('/',
    passport.authenticate('local'),
    onAuth
  );

  return router;
}

export default authApi;
