import {Component} from 'angular2/core';
import {AdminLoginFormComponent} from './components/adminLoginForm';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: "admin-login",
    templateUrl: './app/admin/login/login.component.html',
    directives: [AdminLoginFormComponent]
})

export class LoginComponent { 
    constructor(private _router:Router){
        
    }
    onSucessEventHandler(){
        this._router.navigate(['Dashboard']);
    }
}