exports.up = function (knex) {
  return knex.schema.createTable('artists', (table) => {
    table.string('name').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.createTable('artists');
};
