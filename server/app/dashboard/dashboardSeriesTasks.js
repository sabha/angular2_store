var Product     = require('../models/product');
var Order       = require('../models/order');
var Category    = require('../models/product');
var Supplier    = require('../models/supplier');
var dashboardSeriesTasks = function dashboardSeriesTasks(){
    var self = this;
    this.responseObj = {};
    //Task 1
    this.get = function(callback){

    }
    
 
    if(dashboardSeriesTasks.caller != dashboardSeriesTasks.getInstance){
        throw new Error("This object cannot be instanciated");
    }
}

dashboardSeriesTasks.instance = null;
dashboardSeriesTasks.getInstance = function(){
    if(this.instance === null){
        this.instance = new dashboardSeriesTasks();
    }
    return this.instance;
}
module.exports = dashboardSeriesTasks.getInstance();