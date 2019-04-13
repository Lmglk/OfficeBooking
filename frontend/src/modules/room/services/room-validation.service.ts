import { Injectable } from '@angular/core';
import { RoomParameters } from '../types/RoomParameters';
import { Room } from '../../app/types/Room';

@Injectable({
    providedIn: 'root',
})
export class RoomValidationService {
    public validate(parameters: RoomParameters, rooms: Room[]): string {
        if (parameters.name.length === 0) {
            return 'Room name is empty';
        }

        if (this.checkRoomName(parameters.name, rooms)) {
            return 'Room with same name already exist';
        }

        if (!this.checkRoomSize(parameters.width, parameters.height)) {
            return 'Size of room should not be negative or zero';
        }

        return '';
    }

    private checkRoomName(name: string, rooms: Room[]): boolean {
        return rooms.some(item => item.name === name);
    }

    private checkRoomSize(width: number, height: number) {
        return width > 0 && height > 0;
    }
}
