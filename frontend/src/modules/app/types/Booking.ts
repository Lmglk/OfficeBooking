import { User } from './User';
import { Place } from './Place';

export interface Booking {
    id: number;
    fromDate: number;
    toDate: number;
    approved: boolean;
    isExpired: boolean;
    place: Place;
    user: User;
}
