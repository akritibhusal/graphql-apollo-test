const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// graphql schema
const typeDefs = `
  type SkiDay {
    id: ID!
    date: String!
    mountain: String!
    conditions: Conditions
  }

  enum Conditions {
    POWDER
    HEAVY
    ICE
    THIN
  }

  type Query {
    "Count of total days skied during a season. This comment will appear on the documentation"
    totalDays: Int,
    allDays: [SkiDay!]!
  }

  type Mutation {
    addDay: Int
    removeDay: Int
  }
`;

let skiDays = [
  {
    id: "2WeK11y0",
    date: "2/28/2022",
    mountain: "Mt. Tallac",
    conditions: "POWDER",
  },
  {
    id: "hwXe5b0s",
    date: "3/18/2022",
    mountain: "Freel Peak",
    conditions: "POWDER",
  },
  {
    id: "a4vh99ni",
    date: "3/21/2022",
    mountain: "Tamarack Peak",
    conditions: "ICE",
  },
];

// resolver functions that return data for each field
const resolvers = {
  Query: {
    totalDays: () => skiDays.length,
    allDays: () => skiDays,
  },
  Mutation: {
    addDay: () => ++skiDays,
    removeDay: () => --skiDays,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((server) => console.log(`🚀  Server ready at: ${server.url}`));
