const path = require("path");

const { mergeResolvers } = require("@graphql-tools/merge");

const { loadFilesSync } = require("@graphql-tools/load-files");

const resolvers = loadFilesSync(path.join(__dirname, "./resolvers"));

module.exports = mergeResolvers(resolvers);
