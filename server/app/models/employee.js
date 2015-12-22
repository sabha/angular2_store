var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var employeeSchema   = new Schema({
    employeeID : Number,
    lastName : String,
    firstName : String,
    title : String,
    titleOfCourtesy : String,
    birthDate : Number,
    hireDate : Number,
    address : String,
    city : String,
    region : String,
    postalCode : Number,
    country : String,
    homePhone : String,
    extension : Number,
    photo : String,
    notes : String,
    ReportsTo : Number
});

module.exports = mongoose.model('Employee', employeeSchema , 'employee');

/*
    "_id" : ObjectId("5677a722394d55e3fc7c16a1"),
    "employeeID" : 1,
    "lastName" : "Davolio",
    "firstName" : "Nancy",
    "title" : "Sales Representative",
    "titleOfCourtesy" : "Ms.",
    "birthDate" : 25180,
    "hireDate" : 33725,
    "address" : "507 - 20th Ave. E._x000D_\nApt. 2A",
    "city" : "Seattle",
    "region" : "WA",
    "postalCode" : 98122,
    "country" : "USA",
    "homePhone" : "(206) 555-9857",
    "extension" : 5467,
    "photo" : "EmpID1.bmp",
    "notes" : "Education includes a BA in psychology from Colorado State University.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
    "ReportsTo" : 2
*/