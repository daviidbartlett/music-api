const { songs, artists, genres, playlists } = require('../data');

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      //format artist data
      const artistsToInsert = artists.map(({ name }) => ({ name }));

      //insertions
      const playlistInsertions = knex('playlists').insert(playlists);
      const genreInsertions = knex('genres').insert(genres);
      const artistInsertions = knex('artists').insert(artistsToInsert);

      return Promise.all([
        playlistInsertions,
        genreInsertions,
        artistInsertions,
      ]);
    })
    .then(() => {});
};
