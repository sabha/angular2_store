var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var productSchema   = new Schema({
    productID : Number,
    productName : String,
    supplierID : Number,
    categoryID : Number,
    quantityPerUnit : String,
    unitPrice : Number,
    unitsInStock : Number,
    unitsOnOrder : Number,
    reorderLevel : Number,
    discontinued : String
});

module.exports = mongoose.model('product', productSchema , 'product');

/*
    "_id" : ObjectId("5677a782394d55e3fc7c2273"),
    "productID" : 1,
    "productName" : "Chai",
    "supplierID" : 1,
    "categoryID" : 1,
    "quantityPerUnit" : "10 boxes x 20 bags",
    "unitPrice" : 18,
    "unitsInStock" : 39,
    "unitsOnOrder" : 0,
    "reorderLevel" : 10,
    "discontinued" : ""
*/