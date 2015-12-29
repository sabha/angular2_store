import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SummaryComponent} from './summary/summary.component';
import {ProductComponent} from './product/product.component';
import {RouteParams, Router} from 'angular2/router';


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
  public menuItems[] = [{label:'Dashboard' ,  active:true , disabled:false , routerLink: 'Dashboard'},
                        {label:'Poducts' ,    active:false, disabled:false , routerLink: 'ManageProducts'},
                        {label:'Orders' ,     active:false, disabled:false  , routerLink: ''},
                        {label:'Suppliers' ,  active:false, disabled:false  , routerLink: ''},
                        {label:'Customers' ,  active:false, disabled:false  , routerLink: ''}];
  constructor(private _router:Router){
    
  }
  
  onClick(selectedItem){
    this.menuItems.forEach((item) => {
      item.active = false;
    });
    selectedItem.active = true;
    if(selectedItem.routerLink != '')
      this._router.navigate([selectedItem.routerLink]);
  }
}