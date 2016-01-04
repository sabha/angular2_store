// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var path = require('path');
var util 	   = require('./server/app/util');	
var customerRoute = require('./server/app/customerRoute');
var productRoute  = require('./server/app/productRoute');
var categoryRoute = require('./server/app/categoryRoute');
var dashboardRoute= require('./server/app/dashboardRoute');
var mongoose   = require('mongoose');
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080; // set our port
var publicDir = process.argv[2] || __dirname + '';// suppse to be /client 

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;

app.use(express.static(publicDir));
// set static directories

/*
app.use('/client', express.static(path.resolve('./client')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
app.engine('html', require('ejs').renderFile);
var renderIndex = function(req, res){
    res.render(path.resolve('./client/index.html'));
}
app.get('/*', renderIndex);
*/

var url = 'mongodb://localhost:27017/ngStore';

// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
    url = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME;
}
// Connect to mongodb
var connect = function () {
    mongoose.connect(url);
};
connect();

var db = mongoose.connection;
db.on('error', function(error){
    console.log("Error loading the db - "+ error);
});
db.on('disconnected', connect);

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
dashboardRoute.configRoutes(router);

// REGISTER OUR ROUTES -------------------------------
app.use('/client/api', router);

// START THE SERVER
// =============================================================================
if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    //ipaddress = "127.0.0.1";
    app.listen(port);
}else{
	app.listen(port,ipaddress);
}
console.log('Magic happens on port ' + port);