var mongoose = require('./mongo.config');

var ItemSchema = mongoose.Schema({
    item: String,
    qty: Number,
    status: String,
    size: {},
    tags: Array,
    
},{collection: 'inventory'}, { timestamps: { createdAt: 'addedAt', updatedAt: 'updatedAt' } });

var ItemsModel = mongoose.model('ItemsModel', ItemSchema);
module.exports = ItemsModel;