var Customer = require('./models/customer');
var util    = require('./util');                

function CustomerRoute() {
    console.log("Init Customer Route");
};
CustomerRoute.prototype.configRoutes = function(router){
   // on routes that end in /customers
    // ----------------------------------------------------
    router.route('/customers')
    
    	// get all the customer (accessed at GET http://localhost:8080/api/customers)
    	.get(function(req, res) {
    		Customer.find(function(err, customers) {
    			if (err){
    				res.send(err);
    			}
    			res.json(util.sucess(customers));
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
     
}
module.exports = new CustomerRoute();