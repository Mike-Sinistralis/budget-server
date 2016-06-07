const users = {};
let index = 1;

function add(user) {
  const newUser = Object.assign({ id: index }, user);
  users[index] = newUser;
  index++;

  return Object.assign({}, newUser);
}

function remove(id) {
  delete users[id];
}

function get(id) {
  return Object.assign({}, users[id]);
}

function update(id, data) {
  users[id] = data;

  return Object.assign({}, users[id]);
}

export {
  add,
  remove,
  get,
  update
};