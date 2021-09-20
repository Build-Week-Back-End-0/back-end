
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Lambda', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '2223334444'},
    {username: 'John', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '2213314441'},
    {username: 'Stewart', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '3224335444'}
  ]);
};
