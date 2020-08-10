const { songs, artists, genres, playlists } = require('../data');
const {
  formatSongGenreData,
  formatArtistGenreData,
} = require('../../utils/seed');

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
    .then(() => {
      // eslint-disable-next-line no-unused-vars
      const songsToInsert = songs.map(({ genres, ...rest }) => ({
        ...rest,
      }));
      return knex('songs').insert(songsToInsert);
    })
    .then(() => {
      const songGenreInsertions = knex('songs_genres').insert(
        formatSongGenreData(songs)
      );
      const artistGenreInsertions = knex('artists_genres').insert(
        formatArtistGenreData(artists)
      );
      return Promise.all([songGenreInsertions, artistGenreInsertions]);
    });
};
