import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx' ;


@Component({
    selector: 'dashboard-summary',
    templateUrl: './app/admin/dashboard/summary/summary.component.html',
    styleUrls: ['./app/admin/dashboard/summary/summary.style.css'],
    viewProviders: [HTTP_PROVIDERS]

})

export class SummaryComponent { 
    /*
    var responseObj = {
        productsTotal:0,
        ordersTotal:0,
        categoriesTotal:0,
        suppliersTotal:0
    };
    */    
    public dashboardSummary;
    constructor (public http: Http){
        http.get('api/dashboardSummary')
            .map(res => res.json())
            .subscribe(summary => {
                console.log(summary.data);
                this.dashboardSummary = summary.data;
            });        
    }
}