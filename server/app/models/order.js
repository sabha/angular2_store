var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var orderSchema   = new Schema({
    OrderID : Number,
    CustomerID : String,
    EmployeeID : Number,
    OrderDate : Date,
    RequiredDate : Date,
    ShippedDate : Date,
    ShipVia : Number,
    Freight : Number,
    ShipName : String,
    ShipAddress : String,
    ShipCity : String,
    ShipRegion : String,
    ShipPostalCode : Number,
    ShipCountry : String
});

module.exports = mongoose.model('Order', orderSchema , 'order');

/*
    "_id" : ObjectId("5677a74c394d55e3fc7c16ca"),
    "orderID" : 10248,
    "customerID" : "WILMK",
    "employeeID" : 5,
    "orderDate" : 35250,
    "requiredDate" : 35278,
    "shippedDate" : 35262,
    "shipVia" : 3,
    "freight" : 32.38,
    "shipName" : "Vins et alcools Chevalier",
    "shipAddress" : "59 rue de l'Abbaye",
    "shipCity" : "Reims",
    "shipRegion" : "",
    "shipPostalCode" : 51100,
    "shipCountry" : "France"
*/