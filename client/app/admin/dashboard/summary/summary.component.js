System.register(['angular2/core', 'rxjs/Rx', 'app/services/dashboardHTTPSevice'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dashboardHTTPSevice_1;
    var SummaryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (dashboardHTTPSevice_1_1) {
                dashboardHTTPSevice_1 = dashboardHTTPSevice_1_1;
            }],
        execute: function() {
            SummaryComponent = (function () {
                function SummaryComponent(http) {
                    var _this = this;
                    this.http = http;
                    http.getSummary()
                        .subscribe(function (summary) {
                        console.log(summary.data);
                        _this.dashboardSummary = summary.data;
                    });
                }
                SummaryComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-summary',
                        templateUrl: './app/admin/dashboard/summary/summary.component.html',
                        styleUrls: ['./app/admin/dashboard/summary/summary.style.css'],
                        providers: [dashboardHTTPSevice_1.DashboardHTTPSevice]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof dashboardHTTPSevice_1.DashboardHTTPSevice !== 'undefined' && dashboardHTTPSevice_1.DashboardHTTPSevice) === 'function' && _a) || Object])
                ], SummaryComponent);
                return SummaryComponent;
                var _a;
            })();
            exports_1("SummaryComponent", SummaryComponent);
        }
    }
});
//# sourceMappingURL=summary.component.js.map