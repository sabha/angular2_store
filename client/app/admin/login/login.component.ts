import {Component} from 'angular2/core';
import {AdminLoginFormComponent} from './components/adminLoginForm';


@Component({
    templateUrl: './app/admin/login/login.component.html',
    directives: [AdminLoginFormComponent]
})

export class LoginComponent { 
}