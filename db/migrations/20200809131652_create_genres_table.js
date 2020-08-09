exports.up = function (knex) {
  return knex.schema.createTable('genres', (table) => {
    table.string('genre').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('genres');
};
