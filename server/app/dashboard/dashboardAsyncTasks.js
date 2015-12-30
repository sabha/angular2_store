var Product     = require('../models/product');
var Order       = require('../models/order');
var Category    = require('../models/product');
var Supplier    = require('../models/supplier');
var async = require("async");

var dashboardAsyncTasks = function dashboardAsyncTasks(){
    var self = this;
    this.responseObj = {};
    //Task 1
    this.getOrderCount = function(callback){
        Order.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Order COUNT.");
                callback(err);
            }
            console.log( "Number of Orders :", count );
            self.responseObj.ordersTotal = count;
            callback(null);
        });
    }
    //Task 2
    this.getCategoryCount = function(callback){
        Category.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Category COUNT.");
                callback(err);
            }
            console.log( "Number of Categories :", count );
            self.responseObj.categoriesTotal = count;
            callback(null);
        });
    }
    //Task 3
    this.getSupplierCount = function(callback){
        Supplier.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Supplier COUNT.");
                callback(err);
            }
            
            console.log( "Number of Suppliers :", count );
            self.responseObj.suppliersTotal = count;
            callback(null);
        });    
    }
    //Task 4
   this.getProductCount = function(callback){
        Product.count({}, function( err, count){
            if(err) {
                console.log("Error occured while querying for Product COUNT.");
                callback(err);
            }
            console.log( "Number of Products :", count );
            self.responseObj.productsTotal = count;
            callback(null);
        });
    }
    
    this.findMaxOrderDate = function(callback){
        //"OrderDate" : ISODate("1998-05-06T00:00:00Z")"
        var findMaxDate = Order.find().sort({'OrderDate':-1}).limit(1);
        findMaxDate.exec(function(err, doc) {
            if(err){
                console.log("Error occured while querying Order collection for for Max Date.");
                callback(err);
            }
            if(doc && doc.length > 0 && doc[0].OrderDate){
                var maxYear = doc[0].OrderDate.getFullYear();
                self.responseObj.maxYear = maxYear;
                console.log("Max Year ", maxYear);
                callback();
            }

        });
    }
    this.findMinOrderDate = function(callback){
        //"OrderDate" : ISODate("1996-07-04T00:00:00Z")
        var findMinDate = Order.find().sort({'OrderDate':1}).limit(1);
        findMinDate.exec(function(err, doc) {
            if(err){
                console.log("Error occured while querying Order collection for for Min Date.");
                callback(err);
            }
            if(doc && doc.length > 0 && doc[0].OrderDate){
                var minYear = doc[0].OrderDate.getFullYear();
                self.responseObj.minYear = minYear;
                console.log("Min Year ", minYear);
                callback();
            }
        });            
    } 
    
    
    this.getOrdrsByYear = function(rootCallback){
        var min = self.responseObj.minYear;
        var max = self.responseObj.maxYear;
        var diff = (max-min);
        console.log('getOrdrsByYear Range '+min+' - '+max+' Delta '+diff);
        var queryList = [];
        for(var d = 0 ; d <= diff ; d++){
            var y1,y2;
            y1 = (min+d);y2 = (min+d+1)
            console.log('min '+y1,'max '+y2);
            //db.order.find({OrderDate: { $gte: new Date("1 Jan, 1997"), $lt: new Date("1 Jan, 1998")}})
            var query = Order.find({
                OrderDate: { 
                    $gte: new Date("1 Jan,"+y1.toString()), 
                    $lt: new Date("1 Jan,"+y2.toString())
                }
            }).select({
                'OrderID':1,
                "_id":0
                
            });
            queryList.push({query:query , year:y1});
        }
        console.log("Constructed Queries List for Each Year Range "+queryList.length)
        async.forEach(queryList , 
                function(queryObj, callback) {
                    queryObj.query.exec(function (err, orderids) {
                        if (err) {
                            console.log("Error occured while querying Order for OrderID's.");
                            callback(err);                
                        }
                        self.responseObj.orderIds[queryObj.year] = orderids.map(function(elem){
                                        return elem.OrderID;
                                    }).join(",");
                        console.log("Sucess Order Id's fectched for .",queryObj.year);
                        callback();
                    });
                
                } , 
                function(err) {
                    if (err) {
                        console.log("Error occured while grouping Order ID by Years.");
                        rootCallback(err);
                    }
                    
                    console.log("Sucessfully grouped Order ID by Years.");
                    rootCallback();
                }
            )
        

    }
    
    if(dashboardAsyncTasks.caller != dashboardAsyncTasks.getInstance){
        throw new Error("This object cannot be instanciated");
    }
}

dashboardAsyncTasks.instance = null;
dashboardAsyncTasks.getInstance = function(){
    if(this.instance === null){
        this.instance = new dashboardAsyncTasks();
    }
    return this.instance;
}
module.exports = dashboardAsyncTasks.getInstance();