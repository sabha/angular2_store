import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx' ;

@Component({
    selector: 'manage-products',
    templateUrl: './app/admin/dashboard/product/product.component.html',
    viewProviders: [HTTP_PROVIDERS]
    
})

export class ProductComponent { 
    /*
    ProductID	:	1
    ProductName	:	Chai
    SupplierID	:	1
    CategoryID	:	1
    QuantityPerUnit	:	10 boxes x 20 bags
    UnitPrice	:	18
    UnitsInStock	:	39
    UnitsOnOrder	:	0
    ReorderLevel	:	10
    Discontinued	:	FALSE

    CategoryID	:	1
    CategoryName	:	Beverages
    */

    public productsList;
    constructor (public http: Http){
        http.get('api/products')
            .map(res => res.json())
            .subscribe(products => {
                console.log(products.data);
                this.productsList = products.data;
            });        
    }    
}