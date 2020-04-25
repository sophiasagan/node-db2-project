
exports.up = async function(knex) {
    await knex.schema.alterTable('cars', (table) => {
        table.boolean('automaticTransmission').defaultTo(true)
    })
};

exports.down = async function(knex) {
    await knex.schema.alterTable('cars', (table) =>{
        table.dropColumn('automaticTransmission')
    })
};
