
exports.seed = function(knex) {
  return knex('users').insert([
    {user_id: 1, username: 'foo', password: 'bar'},
    {user_id: 2, username: 'John', password: 'Snow'},
    {user_id: 3, username: 'Hey', password: 'Hi'}
  ]);
};
