exports.up = function (knex) {
  return knex.schema.createTable('songs_genres', (table) => {
    table.increments();
    table
      .integer('song_id')
      .references('songs.id')
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
  return knex.schema.dropTable('songs_genres');
};
