import { RoomState } from '../types/RoomState';
import { SetRoomsAction } from '../../room/actions/SetRoomsAction';
import { ResetRoomsAction } from '../../room/actions/ResetRoomsAction';
import { SetSelectRoomIdAction } from '../../room/actions/SetSelectRoomIdAction';
import { ResetSelectRoomIdAction } from '../../room/actions/ResetSelectRoomIdAction';
import { AddRoomAction } from '../../room/actions/AddRoomAction';
import { Room } from '../types/Room';
import { RemoveRoomAction } from '../../room/actions/RemoveRoomAction';
import { SetSelectPlaceIdAction } from '../../place/actions/SetSelectPlaceIdAction';
import { ResetSelectPlaceIdAction } from '../../place/actions/ResetSelectPlaceIdAction';
import { AddPlaceAction } from '../../place/actions/AddPlaceAction';
import { RemovePlaceAction } from '../../place/actions/RemovePlaceAction';
import { SetTemporaryRoomAction } from '../../room/actions/SetTemporaryRoomAction';
import { ResetTemporaryRoomAction } from '../../room/actions/ResetTemporaryRoomAction';

const initialState: RoomState = {
    rooms: [],
    selectedRoomId: null,
    selectedPlaceId: null,
    temporaryRoom: null,
};

type Action =
    | SetRoomsAction
    | ResetRoomsAction
    | SetSelectRoomIdAction
    | ResetSelectRoomIdAction
    | AddRoomAction
    | RemoveRoomAction
    | SetSelectPlaceIdAction
    | ResetSelectPlaceIdAction
    | AddPlaceAction
    | RemovePlaceAction
    | SetTemporaryRoomAction
    | ResetTemporaryRoomAction;

export function roomReducer(
    state: RoomState = initialState,
    action: Action
): RoomState {
    switch (action.type) {
        case SetRoomsAction.type:
            return {
                ...state,
                rooms: action.payload as Room[],
            };

        case ResetRoomsAction.type:
            return {
                ...state,
                rooms: [],
            };

        case SetSelectRoomIdAction.type:
            return {
                ...state,
                selectedRoomId: action.payload,
            };

        case ResetSelectRoomIdAction.type:
            return {
                ...state,
                selectedRoomId: null,
            };

        case AddRoomAction.type:
            return {
                ...state,
                rooms: [...state.rooms, action.payload as Room],
            };

        case RemoveRoomAction.type:
            return {
                ...state,
                rooms: state.rooms.filter(room => room.id !== action.payload),
            };

        case SetSelectPlaceIdAction.type:
            return {
                ...state,
                selectedPlaceId: action.payload,
            };

        case ResetSelectPlaceIdAction.type:
            return {
                ...state,
                selectedPlaceId: null,
            };

        case AddPlaceAction.type:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.payload.id) {
                        return {
                            ...room,
                            places: [...room.places, action.payload.place],
                        };
                    } else {
                        return room;
                    }
                }),
            };

        case RemovePlaceAction.type:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.payload.roomId) {
                        return {
                            ...room,
                            places: room.places.filter(
                                place => place.id !== action.payload.placeId
                            ),
                        };
                    } else {
                        return room;
                    }
                }),
            };

        case SetTemporaryRoomAction.type:
            return {
                ...state,
                temporaryRoom: action.payload,
            };

        case ResetTemporaryRoomAction.type:
            return {
                ...state,
                temporaryRoom: null,
            };

        default:
            return state;
    }
}
