import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../types/Room';
import { Observable } from 'rxjs';
import { RoomParameters } from '../types/RoomParameters';

@Injectable({
    providedIn: 'root',
})
export class RoomService {
    constructor(private readonly http: HttpClient) {}

    public getRoomList(): Observable<Room[]> {
        return this.http.get<Room[]>('api/room/all');
    }

    public save(parameters: RoomParameters): Observable<Room> {
        return this.http.post<Room>('/api/room/save', parameters);
    }
}
