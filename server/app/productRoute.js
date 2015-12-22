var Product    = require('./models/product');
var util    = require('./util');                

function ProductRoute() {
    console.log("Init Product Route");
};
ProductRoute.prototype.configRoutes = function(router){
   // on routes that end in /products
    // ----------------------------------------------------
    router.route('/products')
    
    	// get all the products (accessed at GET http://localhost:8080/api/products)
    	.get(function(req, res) {
    		Product.find(function(err, products) {
    			if (err){
    				res.send(util.error(err));
    			}
    			res.json(util.sucess(products));
    		});
    	});
    
    // on routes that end in /customers/:product_id
    // ----------------------------------------------------
    router.route('/products/:product_id')
    	// get the product with that id
    	.get(function(req, res) {
    		Product.findOne({"productID":req.params.product_id}, function(err, product) {
    			if (err){
    				res.send(util.error(err));
    			}
    			var message = "";
    			if(product === null)message = "No rcord found for the provided Product ID.";
    			res.json(util.sucess(product , message));
    		});
    	});
     
}
module.exports = new ProductRoute();