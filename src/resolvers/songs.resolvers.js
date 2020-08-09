const songs = require('../models/songs.models.js');

exports.songs = {
  Query: {
    songs: () => {
      return songs.select();
    },
  },
};
