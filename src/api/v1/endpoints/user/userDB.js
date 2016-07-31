import orchestrate from 'orchestrate';
process.env.ORCHESTRATE_API_KEY="053be91e-740d-480b-893e-81d8f4af7aeb";
const db = orchestrate(process.env.ORCHESTRATE_API_KEY);

const users = {};
let index = 1;

function add(user) {
  const newUser = Object.assign({ id: index }, user);

  db.put('users', index, user)
    .then((res) => {
      // success
      return Object.assign({}, res.body);
    })
    .fail((err) => {
      // fail
      return err;
    });

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
  update,
};
