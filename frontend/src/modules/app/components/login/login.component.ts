import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface LoginData {
    email: string;
    password: string;
}

@Component({
    selector: 'ob-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public loginData = {
        email: '',
        password: '',
    };

    constructor(public readonly router: Router) {}

    public login() {
        if (this.loginData.email && this.loginData.password) {
            this.router.navigate(['home']);
        }
    }

    public handleChange(event: Event, fieldName: keyof LoginData) {
        this.loginData = {
            ...this.loginData,
            [fieldName]: (event.target as HTMLInputElement).value,
        };
    }
}
