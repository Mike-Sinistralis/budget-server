import passport from 'passport';
import express from 'express';

function authFacebook(req, res, next) {
  const test = Object.create(res);
  test.end = () => {
    req.url = test.getHeader('location');
    next();
  };
  passport.authenticate('facebook', { scope: ['email'] })(req, test, next);
}

function onFacebookAuth(req, res, next) {
  passport.authenticate('facebook', (user) => {
    debugger;
  })(req, res, next);
}

function returnLocation(req, res) {
  res.json(req.url);
}

function authApi() {
  const router = express.Router({ mergeParams: true });

  router.get('/facebook',
    authFacebook,
    returnLocation
  );

  router.get('/facebook/callback',
    onFacebookAuth
  );

  return router;
}

export default authApi;