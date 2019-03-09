import { Equipment } from '../enums/Equipment';

export interface PlaceParameters {
    name: string;
    equipment: Equipment[];
    description: string;
    isAvailableForBooking: boolean;
    x: number;
    y: number;
}
