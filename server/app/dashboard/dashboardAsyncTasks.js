var Product     = require('../models/product');
var Order       = require('../models/order');
var Category    = require('../models/product');
var Supplier    = require('../models/supplier');
var OrderDetail    = require('../models/orderDetail');

var async = require("async");

var dashboardAsyncTasks = function dashboardAsyncTasks(){
    var self = this;
    this.responseObj = {};
    this.getCountofOrderProdCatSupplier = function(rootCallback){
        var collectionList = [  {name:Product , key:'productsTotal' },{name:Order , key:'ordersTotal'},{name:Category , key:'categoriesTotal'},{name:Supplier , key:'suppliersTotal'}];
        async.forEach(collectionList , 
            function(queryObj, callback) {
                queryObj['name'].count({}, function( err, count){
                    var key = queryObj['key'];
                    if(err) {
                        console.log("Error occured while querying for "+key);
                        callback(err);
                    }
                    console.log( key +' : '+ count );
                    self.responseObj[key] = count;
                    callback(null);
                });
            } , 
            function(err) {
                if (err) {
                    console.log("Error occured while finding the Count of Products, Categories, Supplier, & order.");
                    rootCallback(err);
                }
                console.log("Sucessfully calculated the the Count of Products, Categories, Supplier, & order.");
                rootCallback();
            }
        );        
    }
    this.getOrdersByYear = function(callback){
        //db.order.aggregate([ {$group:{_id:{$year:"$OrderDate"} , OrderID:{$addToSet:$OrderID}}},{$sort:{"_id":1}} ])
        Order.aggregate([
            {$group:{_id:{$year:"$OrderDate"} , OrderID:{$addToSet:"$OrderID"}}}, 
            {$sort:{"_id":1}} 
        ] , function(err , result) {
                if (err) {
                    console.log("Error occured while grouping Order ID by Years.");
                    callback(err);
                }
                console.log("Sucessfully grouped Order ID by Years.");
                if(result && result.length > 0){
                    var len = result.length;
                    self.responseObj.minYear = result[0]._id;
                    self.responseObj.maxYear = result[len-1]._id;
                    self.responseObj.orderIdsbyYear = [];
                    self.responseObj.orderIdsbyYear = result.map(function(obj){
                        var r = {};
                        r[obj._id] = obj.OrderID;
                        return r;
                    });
                }
                //console.log(self.responseObj.orderIdsbyYear);
                callback();
            });
    }
    
    this.getProductsSoldByYear = function(callback){
         //db.orderDetail.aggregate([ { $match :{"OrderID":{$in:orders}} },{$group:{_id:"$ProductID" , Total:{$sum:1} }} , {$sort:{'Total':1}} ]);
         var orders , key ;
         for(var i=0;i<self.responseObj.orderIdsbyYear.length;i++){
             orders = self.responseObj.orderIdsbyYear[i];
             for (var key in orders){
                OrderDetail.aggregate([ 
                    { $match :{"OrderID":{$in:orders[key]}} },
                    { $group :{_id:"$ProductID" , Total:{$sum:1} }} , 
                    { $sort  :{'Total':1}} 
                    ],
                     callbackHandler
                     );                 
             }
             break;                     
         }
         
         function callbackHandler(err , result) {
            if (err) {
                console.log("Error occured while aggregating Oders sold by year "+key);
                callback(err);
            }
            console.log("Sucessfull aggregated Orders for the year "+key);
            console.log(result);
            callback();
         }
         
    }
    
    

    /*
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
    
    
    
    this.getOrdersByYear = function(rootCallback){
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
                                    });
                        console.log("Sucessfully featched Order Id's for the year .",queryObj.year);
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
        

    }*/
    
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