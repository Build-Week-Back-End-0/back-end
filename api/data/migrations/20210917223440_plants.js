exports.up = async function(knex) {
    await knex.schema.createTable('plants', (plants) => {
        plants.increments('plant_id')
        plants.string('nickname', 128).notNullable()
        plants.string('species', 128).notNullable()
        plants.decimal('h2oFrequency').notNullable()
        plants.string('image', 128)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('plants')
};