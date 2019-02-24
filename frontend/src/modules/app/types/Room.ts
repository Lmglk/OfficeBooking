import { Place } from './Place';

export interface Room {
    id: number;
    name: string;
    placesList: Place[];
    description: string;
    width: number;
    height: number;
}
