import graphql from "./graphql";
require("dotenv").config();

//* defines port
const port = parseInt(process.env.PORT) || 20555;

//* server
graphql.listen({ port: port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
