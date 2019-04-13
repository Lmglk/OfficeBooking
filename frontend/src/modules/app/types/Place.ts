import { Equipment } from '../enums/Equipment';

export interface Place {
    id: number;
    name: string;
    equipments: Equipment[];
    description: string;
    isUsed: boolean;
    isAvailableForBooking: boolean;
    x: number;
    y: number;
}
