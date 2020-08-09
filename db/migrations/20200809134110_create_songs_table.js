exports.up = function (knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments();
    table.string('title').notNullable;
    table.string('artist').references('artists.name').notNullable();
    table.text('lyrics');
    table.integer('release_date');
    table.string('playlist').references('playlists.name');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('songs');
};
