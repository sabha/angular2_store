var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var categorySchema   = new Schema({
    categoryID : Number,
    categoryName : String,
    description : String,
    picture : String
});

module.exports = mongoose.model('Category', categorySchema , 'category');

/*
    "_id" : ObjectId("5677a65e394d55e3fc7c163e"),
    "categoryID" : 1,
    "categoryName" : "Beverages",
    "description" : "Soft drinks, coffees, teas, beers, and ales",
    "picture" : ""
*/