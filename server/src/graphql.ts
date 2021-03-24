import { ApolloServer } from "apollo-server-express";
import {
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

// Planner
const Planner = new GraphQLObjectType({
  name: "Planner",
  fields: {
    id: {
      type: GraphQLString,
      resolve: (source) => {
        return source;
      },
    },
  },
});

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      serverMsg: {
        type: GraphQLString,
        resolve: () => {
          return "Hello world!";
        },
      },
      planner: {
        type: Planner,
        args: {
          id: {
            type: GraphQLString,
          },
        },
        resolve: (source, arg) => {
          return arg.id;
        },
      },
    },
  }),
});
// var schema = buildSchema(`
// type Query {
//   serverMsg: String,
//   planner(id: String!): Planner
// }
// type Mutation {
//   CreatePlanner(id: String, name: String) {
//     id: String,
//     name: String,
//     secret: String,
//     adminHashHex: String
//   }
// }
// type Planner {
//   id: String!,
//   name: String!,
//   description: String,
//   adminHashHex: String,
//   refreshTimeHourUTC: Int!,
//   plannerLengthHours: Int!,
//   timeIncrementSeconds: Int!,
//   planned: [Booking]
// }
// type Booking {
//   startSeconds: Int!,
//   endSeconds: Int!,
//   count: Int!,
//   names: [String]
// }
// `);

// The root provides a resolver function for each API endpoint
// var root = {
//   serverMsg: () => {
//     return "Hello world!";
//   },
//   planner: async (id) => {
//     return null;
//   },
// };

export default new ApolloServer({ schema: schema });
