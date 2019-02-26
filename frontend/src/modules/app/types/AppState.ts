import { UserState } from './UserState';
import { RoomState } from './RoomState';

export interface AppState {
    userState: UserState;
    roomState: RoomState;
}
