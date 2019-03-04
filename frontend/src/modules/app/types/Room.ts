import { Place } from './Place';

export interface Room {
    id: number;
    name: string;
    places: Place[];
    description: string;
    width: number;
    height: number;
}
