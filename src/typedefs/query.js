const { gql } = require('apollo-server');

exports.query = gql`
  type Query {
    songs: [Song]
  }
`;
