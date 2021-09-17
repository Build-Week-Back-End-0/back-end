
exports.up = async function(knex) {
    await knex.schema.createTable('users', (users) => {
        users.increments('user_id')
        users.string('username', 128).notNullable().unique();
        users.string('password', 128).notNullable()
        users.string('phone_number', 10).notNullable().unique();
        users.timestamps(false, true)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users')
};
