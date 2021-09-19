exports.up = async function(knex) {
    await knex.schema.createTable('plants', (plants) => {
        plants.increments('plant_id')
        plants.string('nickname', 128).notNullable()
        plants.string('species', 128).notNullable()
        plants.decimal('h2oFrequency').notNullable()
        plants.string('image', 600)

        plants.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('plants')
};