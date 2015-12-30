import {Component , Output, EventEmitter} from 'angular2/core';
import {NgForm , FormBuilder ,Validators,required, ControlGroup , FORM_DIRECTIVES}    from 'angular2/common';

@Component({
    selector: 'admin-login-form',
    templateUrl: './app/admin/login/components/adminLoginForm.html',
    directives: [FORM_DIRECTIVES];
})

export class AdminLoginFormComponent { 
    public loginForm: ControlGroup;
    @Output() onSucessEvent = new EventEmitter<Todo>();
    
    emailValidator(control: Control): { [s: string]: boolean } {  
        if (control.value != "admin@ng2store.com") {  
            return {invalidEmail: true};  
        }
    }
    constructor(fb: FormBuilder) {  
        this.loginForm = fb.group({
            'email':  ['', Validators.compose([Validators.required, this.emailValidator])] ,
            'password':  ['', Validators.compose([ Validators.required, Validators.minlength])]
        });
    }
    
    onSucess(isValid : Boolean): void {  
        if(isValid)this.onSucessEvent.next();
    }

    
}