import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {StroreFrontComponent} from './storefront/storefront.component';


@Component({
    selector: 'ng-store',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  // Admin and Storefront are child route    
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  { path: '/admin/...', name: 'Admin', component: AdminComponent},
  { path: '/storefront/...', name: 'StoreFront', component: StroreFrontComponent},
])

export class AppComponent { 
}