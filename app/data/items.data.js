var Item = require("./../models/item.model");

module.exports = {

  getAllWords: (top) => {
    return Item.find({}).sort({ addedAt: '-1'}).limit(top);
  },


};
