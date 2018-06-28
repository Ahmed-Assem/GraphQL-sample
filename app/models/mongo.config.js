var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

if (process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb://localhost/test');
} else {
    mongoose.connect('mongodb://localhost/test');
    // mongoose.connect('mongodb://localhost/words');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to Database inventory");
    
});

module.exports = mongoose;