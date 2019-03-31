import { User } from './User';
import { Place } from './Place';

export interface Booking {
    id: number;
    fromDate: Date;
    toDate: Date;
    approved: boolean;
    isExpired: boolean;
    place: Place;
    user: User;
}
