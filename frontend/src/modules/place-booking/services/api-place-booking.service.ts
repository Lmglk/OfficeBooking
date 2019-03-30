import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Place } from '../../app/types/Place';
import { BookParamters } from '../types/BookParamters';
import { Observable } from 'rxjs';
import { Booking } from '../../app/types/Booking';

@Injectable({
    providedIn: 'root',
})
export class ApiPlaceBookingService {
    constructor(private readonly http: HttpClient) {}

    public getAll(): Observable<Booking[]> {
        return this.http.get<Booking[]>(`api/booking/all`);
    }

    public save(
        placeId: Place['id'],
        parameters: BookParamters
    ): Observable<Booking> {
        return this.http.post<Booking>(`api/booking/save`, parameters, {
            params: new HttpParams().set('idPlace', String(placeId)),
        });
    }

    public update(placeId: Place['id'], booking: Booking): Observable<Booking> {
        return this.http.post<Booking>(`api/booking/save`, booking, {
            params: new HttpParams().set('idPlace', String(placeId)),
        });
    }
}
