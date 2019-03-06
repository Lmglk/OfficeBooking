import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginParameters } from '../../authorization/types/LoginParameters';
import { User } from '../types/User';
import { Observable } from 'rxjs';
import { SendUserParameters } from '../../authorization/types/SendUserParameters';

@Injectable({
    providedIn: 'root',
})
export class ApiAuthService {
    constructor(public readonly http: HttpClient) {}

    public login(loginParams: LoginParameters): Observable<User> {
        return this.http.post<User>('api/user/login', loginParams);
    }

    public register(parameters: SendUserParameters): Observable<void> {
        return this.http.post<void>('api/user/authorization', parameters);
    }
}
