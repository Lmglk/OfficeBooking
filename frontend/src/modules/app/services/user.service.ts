import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginParameters } from '../types/LoginParameters';
import { User } from '../types/User';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(public readonly http: HttpClient) {}

    public login(loginParams: LoginParameters): Observable<User> {
        return this.http.post<User>('api/user/login', loginParams);
    }
}
