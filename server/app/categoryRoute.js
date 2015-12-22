var Category = require('./models/category');
var Product = require('./models/product');
var util    = require('./util');                

function CategoryRoute() {
    console.log("Init Category Route");
};
CategoryRoute.prototype.configRoutes = function(router){

   // on routes that end in /products
    // ----------------------------------------------------
    router.route('/categories')
    
    	// get all the products (accessed at GET http://localhost:8080/api/products)
    	.get(function(req, res) {
    		Category.find(function(err, products) {
    			if (err){
    				res.send(util.error(err));
    			}
    			res.json(util.sucess(products));
    		});
    	});
       
    
    router.route('/categories/:category_id/products')
    	.get(function(req, res) {
    		var catID = req.params.category_id;
    		var prodID = req.params.product_id;
    		var category;
    		//console.log("Outer >>>",this);
    		Product.find({categoryID:catID},function(err,products){
    			if (err){
    				res.send(err);
    			}
    			res.set({
    			  'Categories-Total-Count': '10'
    			});
    			//console.log("Inner >>>",this);
    			res.send(util.sucess(products));
    		});
    	});
     
}
module.exports = new CategoryRoute();