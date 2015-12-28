import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProductSearchComponent} from './productsearch/productsearch.component';

@Component({
    selector: 'store-front',
    templateUrl: './app/storefront/storefront.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  // Admin and Storefront are child route    
  {path: '/', name: 'ProductSearch', component: ProductSearchComponent, useAsDefault: true},
])

export class StroreFrontComponent { 
}