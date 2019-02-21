import { Equipment } from '../enums/Equipment';

export interface Place {
    id: number;
    name: string;
    equipment: Equipment[];
    description: string;
    isUser: boolean;
    isAvailableForBooking: boolean;
    x: number;
    y: number;
}
