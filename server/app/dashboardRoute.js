var Product     = require('./models/product');
var Order       = require('./models/order');
var Category    = require('./models/product');
var Supplier    = require('./models/supplier');
var async = require("async");

var util    = require('./util');                

function DashboardRoute() {
    console.log("Init Dashboard Summary Route");
};
DashboardRoute.prototype.configRoutes = function(router){
    //GET Dashboard Summary Data
    router.route('/dashboardSummary').get(getDashboardSummaryCallback);
    var responseObj = {
        productsTotal:0,
        ordersTotal:0,
        categoriesTotal:0,
        suppliersTotal:0
    };
    //CallBack for the API call Get Dashboard Summary
    function getDashboardSummaryCallback(req, res){
        var asyncTasks = [];
        //Compose all the Asyn tasks
        asyncTasks.push(getCategoryCount);
        asyncTasks.push(getOrderCount);
        asyncTasks.push(getProductCount);
        asyncTasks.push(getSupplierCount);
        //Trigger the Async Task in Parallel
        async.parallel(asyncTasks , finalCallback);
        //Tasks Final Callback
        function finalCallback(err) {
            if (err) {
                res.send(util.error(err));
                throw err; //Or pass it on to an outer callback, log it or whatever suits your needs
            }
            console.log('Calculated the Total of Products , Orders , Categories , Suppliers');
    		res.json(util.sucess(responseObj));
        }        
    }
    //Task 1
    function getOrderCount(callback){
        Order.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Order COUNT.");
                callback(err);
            }
            console.log( "Number of Orders :", count );
            responseObj.ordersTotal = count;
            callback(null);
        });
    }
    //Task 2
    function getCategoryCount(callback){
        Category.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Category COUNT.");
                callback(err);
            }
            console.log( "Number of Categories :", count );
            responseObj.categoriesTotal = count;
            callback(null);
        });
    }
    //Task 3
    function getSupplierCount(callback){
        Supplier.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Supplier COUNT.");
                callback(err);
            }
            
            console.log( "Number of Suppliers :", count );
            responseObj.suppliersTotal = count;
            callback(null);
        });    
    }
    //Task 4
   function getProductCount(callback){
        Product.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Product COUNT.");
                callback(err);
            }
            console.log( "Number of Products :", count );
            responseObj.productsTotal = count;
            callback(null);
        });
    }
}

module.exports = new DashboardRoute();