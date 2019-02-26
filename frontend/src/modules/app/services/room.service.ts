import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../types/Room';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RoomService {
    constructor(private readonly http: HttpClient) {}

    public getRoomList(): Observable<Room[]> {
        return this.http.get<Room[]>('api/room/all');
    }
}
