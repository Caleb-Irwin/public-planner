import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    serverMsg: String,
    planner(id: String!): Planner,
  }
  type Planner {
    id: String!,
    name: String!,
    description: String,
    adminHashHex: String,
    refreshTimeHourUTC: Int!,
    plannerLengthHours: Int!,
    timeIncrementSeconds: Int!,
    planned: [Booking]
  }
  type Booking {
    startSeconds: Int!,
    endSeconds: Int!,
    count: Int!,
    names: [String]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  serverMsg: () => {
    return "Hello world!";
  },
  planner: async (id) => {
    return null;
  },
};

export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});
