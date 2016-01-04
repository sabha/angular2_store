var async = require("async");
var util    = require('./util');                
var asyncParallelTasks    = require('./dashboard/dashboardAsyncTasks.js'); 
var asyncSeriesTasks    = require('./dashboard/dashboardAsyncTasks.js'); 

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
        suppliersTotal:0,
        minYear:0,
        maxYear:0,
        ordersbyYearAndMonth:[],
        orderDetail:{},
    };
    //CallBack for the API call Get Dashboard Summary
    function getDashboardSummaryCallback(req, res){
         /*************************************************************************
                                  
                                  FIRST PARALLEL Calls
                                  
        ***************************************************************************/    

        function listOfAsyncParallelCalls_FIRST(rootCallback){
            var asyncDashboardTasks = [];
            asyncParallelTasks.responseObj = responseObj;
            //Compose all the Asyn tasks
            asyncDashboardTasks.push(asyncParallelTasks.getCountofOrderProdCatSupplier);
            asyncDashboardTasks.push(asyncParallelTasks.getOrdersByYearAndMonth);
            //Trigger the Async Task in Parallel
            async.parallel(asyncDashboardTasks , First_parallelCalls_Final_Callback);
            
            //Tasks Final Callback
            function First_parallelCalls_Final_Callback(err) {
                if (err) {
                    console.log('Error occured while FIRST Async Parallel Calls');
                    res.send(util.error(err));
                }
                console.log('SUCESSFUL 1 : FIRST ASYNC PARALLEL Calls.');
                console.log('Calculated the Total of Products , Orders , Categories , Suppliers , Min Year , & Max Year');
        		rootCallback();
        	}            
        }

        /***************************************************************************    
                                  
                                  SECOND PARALLEL Calls
                                  
        ***************************************************************************/    

        function listOfAsyncParallelCalls_SECOND(rootCallback){
            var asyncDashboardTasks = [];
            
            asyncDashboardTasks.push(asyncParallelTasks.getProductsSoldByYear);
            
            async.parallel(asyncDashboardTasks , Second_parallelCalls_Final_Callback);
            //Tasks Final Callback
            function Second_parallelCalls_Final_Callback(err) {
                if (err) {
                    console.log('Error occured while Second Async Parallel Calls.');
                    res.send(util.error(err));
                }
                console.log('SUCESSFUL 2 : SECOND ASYNC PARALLEL Calls.');
                //console.log('Calculated the Total of Products , Orders , Categories , Suppliers , Min Year , & Max Year');
        		rootCallback();
        		//res.json(util.sucess(responseObj));
            }   
        }
        /*************************************************************************
                
                SERIES of PARALLEL Calls which pepare Dashboar Summary
                
        ***************************************************************************/    
        var seriesDashboardTasks = [];
        
        seriesDashboardTasks.push(listOfAsyncParallelCalls_FIRST);
        seriesDashboardTasks.push(listOfAsyncParallelCalls_SECOND);
        
        async.series(seriesDashboardTasks , seriesCalls_Callback);
        
        function seriesCalls_Callback(err){
            if (err){
                res.send(util.error(err));
            }
            console.log('SUCESSFUL ALL  : ASYNC SERIES Calls');
            res.json(util.sucess(responseObj));
            
        }        

        
    }
    
}

module.exports = new DashboardRoute();