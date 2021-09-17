
exports.seed = function(knex) {
  return knex('plants').insert([
    {plant_id: 1, nickname: 'test', species: 'test', h2oFrequency: '2.9', image: '#'},
    {plant_id: 2, nickname: ' Japanese Wisteria', species: 'Wisteria', h2oFrequency: '3', image: '#'},
    {plant_id: 3, nickname: 'name', species: 'fill', h2oFrequency: '4', image: '#'},
  ]);
};