import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginParameters } from '../types/LoginParameters';
import { User } from '../../app/types/User';
import { Observable } from 'rxjs';
import { SendUserParameters } from '../types/SendUserParameters';

@Injectable({
    providedIn: 'root',
})
export class ApiAuthService {
    constructor(public readonly http: HttpClient) {}

    public login(loginParams: LoginParameters): Observable<User> {
        return this.http.post<User>('api/user/login', loginParams);
    }

    public register(parameters: SendUserParameters): Observable<void> {
        return this.http.post<void>('api/user/registration', parameters);
    }
}
