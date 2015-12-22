var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var customerschema   = new Schema({
    customerID : String,
    companyName : String,
    contactName : String,
    contactTitle : String,
    address : String,
    city : String,
    region : String,
    postalCode : Number,
    country : String,
    phone : String,
    fax : String
});

module.exports = mongoose.model('customer', customerschema , 'customer');

/*
{
    "_id" : ObjectId("5677a716394d55e3fc7c1646"),
    "customerID" : "ALFKI",
    "companyName" : "Alfreds Futterkiste",
    "contactName" : "Maria Anders",
    "contactTitle" : "Sales Representative",
    "address" : "Obere Str. 57",
    "city" : "Berlin",
    "region" : "",
    "postalCode" : 12209,
    "country" : "Germany",
    "phone" : "030-0074321",
    "fax" : "030-0076545"
}
*/