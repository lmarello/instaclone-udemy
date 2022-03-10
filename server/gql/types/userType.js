const { gql } = require("apollo-server");

const userType = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    presentation: String
    password: String
    createdAt: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
    avatar: String
    presentation: String
  }

  type Query {
    getUser: User
  }

  type Mutation {
    createUser(user: UserInput): User
  }
`;

module.exports = userType;
