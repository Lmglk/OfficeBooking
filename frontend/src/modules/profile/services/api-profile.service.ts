import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/types/User';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiProfileService {
    constructor(private readonly http: HttpClient) {}

    public updateProfile(user: User): Observable<void> {
        return this.http.post<void>('api/user/update', user);
    }
}
