exports.up = function (knex) {
  return knex.schema.createTable('artists_genres', (table) => {
    table.increments();
    table
      .string('artist')
      .references('artists.name')
      .notNullable()
      .onDelete('CASCADE');
    table
      .string('genre')
      .references('genres.genre')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('artists_genres');
};
