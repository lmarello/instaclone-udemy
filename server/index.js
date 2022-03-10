const mongoose = require("mongoose");

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./gql/mergedTypeDefs");
const resolvers = require("./gql/mergedResolvers");

require("dotenv").config({ path: ".env" });

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongooseCallback = (error, _res) => {
  if (error) console.log("Mongoose connection error");
  else {
    console.log("Mongoose connected");
    runApolloServer();
  }
};

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  mongooseOptions,
  mongooseCallback
);

function runApolloServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  apolloServer.listen().then(({ url }) => {
    console.log(`Apollo server is running on ${url}`);
  });
}
