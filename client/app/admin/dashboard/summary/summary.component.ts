import {Component} from 'angular2/core';
import 'rxjs/Rx' ;
import {DashboardHTTPSevice} from 'app/services/dashboardHTTPSevice';


@Component({
    selector: 'dashboard-summary',
    templateUrl: './app/admin/dashboard/summary/summary.component.html',
    styleUrls: ['./app/admin/dashboard/summary/summary.style.css'],
    providers:[DashboardHTTPSevice]

})

export class SummaryComponent { 
    
    public dashboardSummary;
    constructor (public http: DashboardHTTPSevice){
        http.getSummary()
            .subscribe(summary => {
                console.log(summary.data);
                this.dashboardSummary = summary.data;
            });        
    }
}