/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('companies', (table) => {
    table.json('waste_types').comment('Array of waste types accepted by recycling center');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('companies', (table) => {
    table.dropColumn('waste_types');
  });
}; 