
exports.seed = function(knex) {
  return knex('users').insert([
    {user_id: 1, username: 'foo', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '222-333-4444'},
    {user_id: 2, username: 'John', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '221-331-4441'},
    {user_id: 3, username: 'Hey', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '322-433-5444'}
  ]);
};
