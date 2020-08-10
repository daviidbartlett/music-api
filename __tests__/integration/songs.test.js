const request = require('supertest');

describe('Query All Songs', () => {
  it('responds with properties from songs table', async () => {
    const { status, body } = await request('http://localhost:4000')
      .post('/')
      .send({
        query: `query {
        songs {
          id
          title
          artist
          release_date
          playlist
          lyrics
        }
    }`,
      });
    expect(status).toBe(200);
    expect(body.data.songs.length).toBe(6);
    expect(body.data.songs[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        artist: expect.any(String),
        release_date: expect.any(Number),
        playlist: expect.any(String),
        lyrics: expect.any(String),
      })
    );
  });
  it('song has genre prop which is array of genre stings', async () => {
    const { body } = await request('http://localhost:4000').post('/').send({
      query: `query {
        songs {
          genres
        }
    }`,
    });
    expect(body.data.songs[0]).toEqual(
      expect.objectContaining({
        genres: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
