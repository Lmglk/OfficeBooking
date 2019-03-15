import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlaceParameters } from '../types/PlaceParameters';
import { Observable } from 'rxjs';
import { Place } from '../../app/types/Place';
import { Room } from '../../app/types/Room';

@Injectable({
    providedIn: 'root',
})
export class ApiPlaceService {
    constructor(private readonly http: HttpClient) {}

    public save(
        roomId: Room['id'],
        parameters: PlaceParameters
    ): Observable<Place> {
        return this.http.post<Place>(`api/place/save`, parameters, {
            params: new HttpParams().set('idRoom', String(roomId)),
        });
    }

    public remove(place: Place): Observable<void> {
        return this.http.post<void>('api/place/remove', place);
    }
}
