import { Room } from './Room';
import { Place } from './Place';

export interface RoomState {
    rooms: Room[];
    selectedRoomId: number | null;
    selectedPlaceId: number | null;
    temporaryRoom: Room | null;
    temporaryPlace: Place | null;
}
