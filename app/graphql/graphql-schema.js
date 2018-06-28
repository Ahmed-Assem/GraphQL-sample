const { GraphQLSchema } = require("graphql");
const { queryType } = require("./query-type");
// const { mutationType } = require("./mutation-type");

const schema = new GraphQLSchema({
  query: queryType
  
});

exports.schema = schema;
