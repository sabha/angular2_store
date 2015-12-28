System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var AdminLoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AdminLoginFormComponent = (function () {
                function AdminLoginFormComponent(fb) {
                    this.onSucessEvent = new core_1.EventEmitter();
                    this.loginForm = fb.group({
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, this.emailValidator])],
                        'password': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minlength])]
                    });
                }
                AdminLoginFormComponent.prototype.emailValidator = function (control) {
                    if (control.value != "admin@ng2store.com") {
                        return { invalidEmail: true };
                    }
                };
                AdminLoginFormComponent.prototype.onSucess = function (value) {
                    console.log('you submitted value: ', value);
                    this.onSucessEvent.next();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AdminLoginFormComponent.prototype, "onSucessEvent", void 0);
                AdminLoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-login-form',
                        templateUrl: './app/admin/login/components/adminLoginForm.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AdminLoginFormComponent);
                return AdminLoginFormComponent;
            })();
            exports_1("AdminLoginFormComponent", AdminLoginFormComponent);
        }
    }
});
//# sourceMappingURL=adminLoginForm.js.map