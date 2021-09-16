const db = require('../../data/db-config.js');

function get() {
  return db('users')
}

function getBy(filter) {
  return db('users').where(filter).orderBy("user_id")
}

function getById(user_id) {
  return db('users').where('user_id', user_id).first();
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
};
