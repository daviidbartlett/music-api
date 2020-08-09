const db = require('../../db/connection');

exports.select = () => {
  return db('songs')
    .select(
      'songs.*',
      db.raw('ARRAY_REMOVE(ARRAY_AGG(genres.genre), NULL) as genres')
    )
    .leftJoin('songs_genres', 'songs.id', 'songs_genres.song_id')
    .leftJoin('genres', 'songs_genres.genre', 'genres.genre')
    .groupBy('songs.id');
};
