const {
  formatSongGenreData,
  formatArtistGenreData,
} = require('../../utils/seed');

describe('formatSongGenreData', () => {
  it('returns empty array when passed empty array', () => {
    expect(formatSongGenreData([])).toEqual([]);
  });
  it('returns array with object containing correct props', () => {
    expect(formatSongGenreData([{ genres: ['pop'] }])).toEqual([
      { song_id: 1, genre: 'pop' },
    ]);
  });
  it('handles multiple genre-d songs', () => {
    expect(formatSongGenreData([{ genres: ['pop', 'metal', 'punk'] }])).toEqual(
      [
        { song_id: 1, genre: 'pop' },
        { song_id: 1, genre: 'metal' },
        { song_id: 1, genre: 'punk' },
      ]
    );
  });
  it('handles multiple  songs', () => {
    expect(
      formatSongGenreData([{ genres: ['pop'] }, { genres: ['metal'] }])
    ).toEqual([
      { song_id: 1, genre: 'pop' },
      { song_id: 2, genre: 'metal' },
    ]);
  });
  it('does not mutate original array', () => {
    const input = [{ genres: ['pop'] }, { genres: ['metal'] }];
    formatSongGenreData(input);
    expect(input).toEqual([{ genres: ['pop'] }, { genres: ['metal'] }]);
  });
});

describe('formatArtistGenreData', () => {
  it('returns empty array when passed empty array', () => {
    expect(formatArtistGenreData([])).toEqual([]);
  });
  it('returns array with object containing correct props', () => {
    expect(
      formatArtistGenreData([{ name: 'Katy Perry', genres: ['pop'] }])
    ).toEqual([{ artist: 'Katy Perry', genre: 'pop' }]);
  });
  it('handles multiple genre-d artists', () => {
    expect(
      formatArtistGenreData([{ name: 'Katy Perry', genres: ['pop', 'cheese'] }])
    ).toEqual([
      { artist: 'Katy Perry', genre: 'pop' },
      { artist: 'Katy Perry', genre: 'cheese' },
    ]);
  });
  it('handles multiple artists', () => {
    expect(
      formatArtistGenreData([
        { name: 'Katy Perry', genres: ['pop'] },
        { name: 'The Fray', genres: ['Indie'] },
      ])
    ).toEqual([
      { artist: 'Katy Perry', genre: 'pop' },
      { artist: 'The Fray', genre: 'Indie' },
    ]);
  });
  it('does not mutate original array', () => {
    const input = [
      { name: 'Katy Perry', genres: ['pop'] },
      { name: 'The Fray', genres: ['Indie'] },
    ];
    formatArtistGenreData(input);
    expect(input).toEqual([
      { name: 'Katy Perry', genres: ['pop'] },
      { name: 'The Fray', genres: ['Indie'] },
    ]);
  });
});
