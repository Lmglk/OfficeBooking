import { UserState } from './UserState';
import { RoomState } from './RoomState';
import { BookingState } from './BookingState';

export interface AppState {
    userState: UserState;
    roomState: RoomState;
    bookingState: BookingState;
}
