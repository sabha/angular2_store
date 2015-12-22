var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var orderDetailSchema   = new Schema({
    orderID : Number,
    customerID : Number,
    unitPrice : Number,
    quantity : Number,
    discount : Number
});

module.exports = mongoose.model('OrderDetail', orderDetailSchema , 'orderDetail');

/*
    "_id" : ObjectId("5677a75b394d55e3fc7c1a08"),
    "orderID" : 10248,
    "customerID" : 11,
    "unitPrice" : 14,
    "quantity" : 12,
    "discount" : 0
*/