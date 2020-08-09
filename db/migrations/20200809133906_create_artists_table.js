exports.up = function (knex) {
  return knex.schema.createTable('artists', (table) => {
    table.string('name').primary().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('artists');
};
