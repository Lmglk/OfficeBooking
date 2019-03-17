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
import { UpdateRoomAction } from '../../room/actions/UpdateRoomAction';
import { UpdatePlaceAction } from '../../place/actions/UpdatePlaceAction';
import { SetTemporaryPlaceAction } from '../../place/actions/SetTemporaryPlaceAction';
import { ResetTemporaryPlaceAction } from '../../place/actions/ResetTemporaryPlaceAction';

const initialState: RoomState = {
    rooms: [],
    selectedRoomId: null,
    selectedPlaceId: null,
    temporaryRoom: null,
    temporaryPlace: null,
};

type Action =
    | SetRoomsAction
    | ResetRoomsAction
    | SetSelectRoomIdAction
    | ResetSelectRoomIdAction
    | AddRoomAction
    | UpdateRoomAction
    | RemoveRoomAction
    | SetSelectPlaceIdAction
    | ResetSelectPlaceIdAction
    | AddPlaceAction
    | UpdatePlaceAction
    | RemovePlaceAction
    | SetTemporaryRoomAction
    | ResetTemporaryRoomAction
    | SetTemporaryPlaceAction
    | ResetTemporaryPlaceAction;

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

        case UpdateRoomAction.type:
            return {
                ...state,
                rooms: state.rooms.map(room =>
                    room.id === action.payload.id ? action.payload : room
                ),
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

        case UpdatePlaceAction.type:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.payload.id) {
                        return {
                            ...room,
                            places: room.places.map(place =>
                                place.id === action.payload.place.id
                                    ? {
                                          ...place,
                                          ...action.payload.place,
                                      }
                                    : place
                            ),
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

        case SetTemporaryPlaceAction.type:
            return {
                ...state,
                temporaryPlace: action.payload,
            };

        case ResetTemporaryPlaceAction.type:
            return {
                ...state,
                temporaryPlace: null,
            };

        default:
            return state;
    }
}
