import { Room } from './Room';

export interface RoomState {
    rooms: Room[];
    selectedRoomId: number | null;
    selectedPlaceId: number | null;
}
