System.register(['angular2/platform/browser', 'angular2/router', './app.component', 'angular2/http', 'app/services/dashboardHTTPSevice'], function(exports_1) {
    var browser_1, router_1, app_component_1, http_1, dashboardHTTPSevice_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dashboardHTTPSevice_1_1) {
                dashboardHTTPSevice_1 = dashboardHTTPSevice_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, dashboardHTTPSevice_1.DashboardHTTPSevice]);
        }
    }
});
//# sourceMappingURL=boot.js.map