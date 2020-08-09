exports.formatSongGenreData = (data) => {
  return data
    .map(({ genres }, index) => {
      return genres.map((genre) => ({ song_id: index + 1, genre }));
    })
    .flat();
};

exports.formatArtistGenreData = (data) => {
  return data
    .map(({ name, genres }, index) => {
      return genres.map((genre) => ({ artist: name, genre }));
    })
    .flat();
};
