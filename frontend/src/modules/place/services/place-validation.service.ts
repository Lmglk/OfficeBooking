import { Injectable } from '@angular/core';
import { Place } from '../../app/types/Place';
import { PlaceParameters } from '../types/PlaceParameters';

@Injectable({
    providedIn: 'root',
})
export class PlaceValidationService {
    public validate(parameters: PlaceParameters, places: Place[]): string {
        if (parameters.name.length === 0) {
            return 'Place name is empty';
        }

        if (this.checkPlaceName(parameters.name, places)) {
            return 'Place with same name already exist';
        }

        if (this.checkCoordinates(parameters.x, parameters.y, places)) {
            return 'Place with same coordinated already exist';
        }

        return '';
    }

    private checkPlaceName(name: string, places: Place[]): boolean {
        return places.some(item => item.name === name);
    }

    private checkCoordinates(x: number, y: number, places: Place[]): boolean {
        return places.some(item => item.x === x && item.y === y);
    }
}
