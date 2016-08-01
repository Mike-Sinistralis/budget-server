import { Strategy as FacebookStrategy } from 'passport-facebook';
import { User } from '../db';

function loadPassportStrategies(passport) {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findByKey(id).then((user) => done(null, user)));

  passport.use(getFacebookStrategy());
}

function getFacebookStrategy() {
  return new FacebookStrategy({
      clientID: '1735590420028442',
      clientSecret: '494f746bd1998b422d9ea062c0d06393',
      callbackURL: 'http://localhost:3110/v1/auth/facebook/callback/',
      profileFields: ['id', 'email', 'displayName']
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreateByFacebookId(profile._json)
        .then((user) => cb(user))
    }
  )
}



export default loadPassportStrategies;
