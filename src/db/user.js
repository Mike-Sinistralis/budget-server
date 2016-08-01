import db from './db';

function findOrCreateByFacebookId(profile) {
  return db.search('users', `value.facebook.id = ${profile.id}`)
    .then((res) => {
      if (res.body.count === 0) {
        const { id, name, email } = profile;
        return create({
          email,
          facebook: {
            id,
            name,
            email
          }
        });
      } else {
        return Object.assign({}, { key: res.body.results[0].path.key }, res.body.results[0].value );
      }
    })
}

function findByKey(key) {

}

function create(user) {
  return db.post('users', user)
    .then((res) => {
      return Object.assign({}, { key: res.path.key }, user);
    })
}

function deleteUserByKey(userId) {

}

export {
  findOrCreateByFacebookId,
  findByKey,
  create,
}