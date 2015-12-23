import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login/login.component';

@Component({
    templateUrl: './app/admin/admin.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  // Admin and Storefront are child route    
  {path: '/', name: 'Login', component: LoginComponent, useAsDefault: true},
])

export class AdminComponent { 
}