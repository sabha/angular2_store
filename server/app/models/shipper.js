var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var shipperSchema   = new Schema({
    shipperID : Number,
    companyName : String,
    phone : String
});

module.exports = mongoose.model('Shipper', shipperSchema , 'shipper');

/*
    "_id" : ObjectId("5677a731394d55e3fc7c16aa"),
    "shipperID" : 1,
    "companyName" : "Speedy Express",
    "phone" : "(503) 555-9831"
*/