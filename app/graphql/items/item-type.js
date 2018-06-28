const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = require("graphql");

exports.itemType = new GraphQLObjectType({
  name: "Word",
  description: "this is a single word",
  fields: {
    item: {
type:GraphQLString,
description:""
    },
    qty: {
      type:GraphQLInt,
      description:""
          },
    status: {
      type:GraphQLString,
      description:""
          },
   
    tags: {

type:GraphQLList(GraphQLString),
description:""

    },
    
  }
});
