import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ng-store',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: './app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent { 
    public storeFrontFeatures:[];
    
    constructor (public http: Http){
        this.storeFrontFeatures = [ 
             {name:"Northwind Database"},
             {name:"Browser for Products"},
             {name:"Search & FIlter Products"},
			 {name:"Add to Cart & Checkout"},
			 {name:"Place Order"}
			];
			
        http.get('api/categories')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        .subscribe(categories => console.log(categories));
			
    }
    
}