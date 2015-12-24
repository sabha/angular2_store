// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

var util 	   = require('./server/app/util');	
var customerRoute = require('./server/app/customerRoute');
var productRoute  = require('./server/app/productRoute');
var categoryRoute = require('./server/app/categoryRoute');

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port
var publicDir = process.argv[2] || __dirname + '';// suppse to be /client 

/*
app.get("/", function (req, res) {
  res.redirect("client/index.html");
});
*/
app.use(express.static(publicDir));

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ngStore'); // connect to our database

var Category    = require('./server/app/models/category');
var Employee    = require('./server/app/models/employee');
var Order     	= require('./server/app/models/order');
var OrderDetail	= require('./server/app/models/orderDetail');
var Shipper     = require('./server/app/models/shipper');
var Supplier    = require('./server/app/models/supplier');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requestsclear
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/adminFeatures', function(req, res) {
	res.json([
			{name:"Dashboard"},
			{name:"Manage Products"},
			{name:"View Orders"},
			{name:"View Customer"},
			{name:"Analytics"}
		]);	
});

customerRoute.configRoutes(router);
productRoute.configRoutes(router);
categoryRoute.configRoutes(router);	

// REGISTER OUR ROUTES -------------------------------
app.use('/client/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);