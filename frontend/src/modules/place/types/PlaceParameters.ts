import { Equipment } from '../../app/enums/Equipment';

export interface PlaceParameters {
    name: string;
    equipment: Equipment[];
    description: string;
    isAvailableForBooking: boolean;
    x: number;
    y: number;
}
