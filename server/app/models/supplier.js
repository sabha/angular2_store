var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var supplierSchema   = new Schema({
    supplierID : Number,
    companyName : String,
    contactName : String,
    contactTitle : String ,
    address : String,
    city : String ,
    region : String,
    postalCode : String,
    country : String,
    phone : String,
    fax : String
});

module.exports = mongoose.model('Supplier', supplierSchema , 'supplier');

/*
    "_id" : ObjectId("5677a739394d55e3fc7c16ad"),
    "supplierID" : 1,
    "companyName" : "Exotic Liquids",
    "contactName" : "Charlotte Cooper",
    "contactTitle" : "Purchasing Manager",
    "address" : "49 Gilbert St.",
    "city" : "London",
    "region" : "",
    "postalCode" : "EC1 4SD",
    "country" : "UK",
    "phone" : "(171) 555-2222",
    "fax" : ""
*/