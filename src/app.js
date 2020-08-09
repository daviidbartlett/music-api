const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./typedefs');
const { resolvers } = require('./resolvers');
exports.server = new ApolloServer({ typeDefs, resolvers });
