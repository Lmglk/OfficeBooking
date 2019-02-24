import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginParameters } from '../types/LoginParameters';
import { Person } from '../types/Person';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(public readonly http: HttpClient) {}

    public login(loginParams: LoginParameters): Observable<Person> {
        return this.http.post<Person>('api/person/login', loginParams);
    }
}
