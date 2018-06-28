const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const ItemModel = require('../data/items.data');
const { itemType } = require('./items/item-type');


exports.queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'this is the query type',
  fields: {
    items: {
      type: new GraphQLList(itemType),
      description: 'this is the list of words returned',
      args: {
        top: { type: GraphQLInt }
      },
      resolve: (_, args) => {
        return ItemModel.getAllWords(args.top);
      }
    }

   }
});
