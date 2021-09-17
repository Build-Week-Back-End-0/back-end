const db = require('../data/db-config');

function get() {
  return db('users')
}

function getBy(filter) {
  return db('users').where(filter).orderBy("user_id")
}

function getById(user_id) {
  return db('users').where('user_id', user_id).first();
}

function update(user_id, changes) {
  return db('users').where('user_id', user_id).first().update(changes)
}

async function add(user) {
  const [id] = await db('users').insert(user)
  return getById(id);
}

module.exports = {
  get,
  getBy,
  getById,
  add,
  update,
};
 