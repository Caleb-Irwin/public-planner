import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    serverMsg: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  serverMsg: () => {
    return "Hello world!";
  },
};

export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});
