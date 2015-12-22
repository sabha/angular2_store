// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port
var publicDir = process.argv[2] || __dirname + '';// suppse to be /client 


app.get("/", function (req, res) {
  res.redirect("client/index.html");
});

app.use(express.static(publicDir));


var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ngStore'); // connect to our database
var Customer    = require('./server/app/models/customer');
var Category    = require('./server/app/models/category');
var Employee    = require('./server/app/models/employee');
var Order     	= require('./server/app/models/order');
var OrderDetail	= require('./server/app/models/orderDetail');
var Product     = require('./server/app/models/product');
var Shipper     = require('./server/app/models/shipper');
var Supplier    = require('./server/app/models/supplier');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /bears
// ----------------------------------------------------
router.route('/customers')

	// get all the customer (accessed at GET http://localhost:8080/api/customers)
	.get(function(req, res) {
		Customer.find(function(err, customers) {
			if (err){
				res.send(err);
			}
			res.json(customers);
		});
	});

// on routes that end in /customers/:customer_id
// ----------------------------------------------------
router.route('/customers/:customer_id')

	// get the customer with that id
	.get(function(req, res) {
		Customer.find({"customerID":req.params.customer_id}, function(err, customer) {
			if (err){
				res.send(err);
			}
			res.json(customer);
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);