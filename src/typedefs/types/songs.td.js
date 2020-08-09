const { gql } = require('apollo-server');

exports.songs = gql`
  type Song {
    id: ID
    title: String
    artist: String
    lyrics: String
    release_date: Int
    playlist: String
    genres: [String]
  }
`;
