System.register(['angular2/core', 'angular2/router', './summary/summary.component', './product/product.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, summary_component_1, product_component_1, router_2;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (summary_component_1_1) {
                summary_component_1 = summary_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router) {
                    this._router = _router;
                    this.menuItems = [{ label: 'Dashboard', active: true, disabled: false, routerLink: 'Dashboard' },
                        { label: 'Poducts', active: false, disabled: false, routerLink: 'ManageProducts' },
                        { label: 'Orders', active: false, disabled: false, routerLink: '' },
                        { label: 'Suppliers', active: false, disabled: false, routerLink: '' },
                        { label: 'Customers', active: false, disabled: false, routerLink: '' }];
                }
                DashboardComponent.prototype.onClick = function (selectedItem) {
                    this.menuItems.forEach(function (item) {
                        item.active = false;
                    });
                    selectedItem.active = true;
                    if (selectedItem.routerLink != '')
                        this._router.navigate([selectedItem.routerLink]);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: './app/admin/dashboard/dashboard.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        // Admin and Storefront are child route    
                        { path: '/', name: 'Summary', component: summary_component_1.SummaryComponent, useAsDefault: true },
                        { path: '/products', name: 'ManageProducts', component: product_component_1.ProductComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map