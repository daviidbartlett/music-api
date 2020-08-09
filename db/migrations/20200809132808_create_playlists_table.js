exports.up = function (knex) {
  return knex.schema.createTable('playlists', (table) => {
    table.string('name').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('playlists');
};
