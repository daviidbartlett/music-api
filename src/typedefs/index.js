const { query } = require('./query');
const { songs } = require('./types/songs.td');

exports.typeDefs = [query, songs];
