import { add, remove, get, update } from './userDB';

function createUser({ username, password }) {
  return add({
    username,
    password
  });
}

function updateUser(user, { username, password }) {
  let newData = {};

  if (username) {
    newData.username = username;
  }

  if (password) {
    newData.password = password;
  }

  return update(user.id, Object.assign({}, user, newData));
}

function getUser(id) {
  let user = get(id);

  return user.id ? user : null;
}

function deleteUser(user) {
  delete(user.id);
}

export { createUser, updateUser, getUser, deleteUser };
