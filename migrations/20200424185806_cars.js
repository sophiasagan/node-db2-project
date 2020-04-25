
exports.up = async function(knex) {
    await knex.schema.createTable('cars', (table) => {
        // table.integer('id').notNull().primary()
        table.increments('id')
        table.text('make', 128).notNull()
        table.text('model', 128).notNull()
        table.integer('year', 4).notNull()
        table.decimal('mileage', 6).notNull()
        table.string('vin', 17).notNull().unique()
        table.boolean('titleStatusIsClean').defaultTo(true)
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars')
};
