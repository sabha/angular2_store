import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SummaryComponent} from './summary/summary.component';
import {ProductComponent} from './product/product.component';


@Component({
    selector: 'dashboard',
    templateUrl: './app/admin/dashboard/dashboard.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  // Admin and Storefront are child route    
  {path: '/', name: 'Summary', component: SummaryComponent, useAsDefault: true},
  {path: '/products', name: 'ManageProducts', component: ProductComponent}

])
export class DashboardComponent { 
}