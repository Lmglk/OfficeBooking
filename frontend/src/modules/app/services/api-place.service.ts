import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlaceParameters } from '../types/PlaceParameters';
import { Observable } from 'rxjs';
import { Place } from '../types/Place';

@Injectable({
    providedIn: 'root',
})
export class ApiPlaceService {
    constructor(private readonly http: HttpClient) {}

    public save(parameters: PlaceParameters): Observable<Place> {
        return this.http.post<Place>('api/place/save', parameters);
    }
}
