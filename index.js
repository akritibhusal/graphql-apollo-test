const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// graphql schema
const typeDefs = `
  type Query {
    "Count of total days skied during a season. This comment will appear on the documentation"
    totalDays: Int
  }
`;

// resolver functions that return data for each field
const resolvers = {
  Query: {
    totalDays: () => 100,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((server) => console.log(`🚀  Server ready at: ${server.url}`));
