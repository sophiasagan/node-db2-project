
exports.up = async function(knex) {
    await knex.schema.createTable('sales', (table) => {
        // table.integer('id').notNull().primary()
        table.increments();
        table.integer('car_id').unsigned().notNullable();
        table.decimal('price', 128).notNullable();
        table.string('saleType', 128).notNullable();
        
        table.foreign('car_id').references('id').inTable('cars');
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('sales')
};
