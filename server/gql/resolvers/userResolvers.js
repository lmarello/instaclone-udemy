const { createUser, getUser } = require("../../controllers/userController");

const userResolvers = {
  Query: {
    getUser: () => getUser(),
  },
  Mutation: {
    createUser: async (_, { user }) => createUser(user),
  },
};

module.exports = userResolvers;
