import {Component} from 'angular2/core';
import {LoginFormComponent} from './components/loginForm';


@Component({
    templateUrl: './app/admin/login/login.component.html',
    directives: [LoginFormComponent]
})

export class LoginComponent { 
}