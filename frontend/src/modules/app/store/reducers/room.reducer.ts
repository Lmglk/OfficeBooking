import { RoomState } from '../../types/RoomState';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { ResetRoomsAction } from '../actions/ResetRoomsAction';
import { SetSelectRoomIdAction } from '../actions/SetSelectRoomIdAction';
import { ResetSelectRoomIdAction } from '../actions/ResetSelectRoomIdAction';
import { AddRoomAction } from '../actions/AddRoomAction';
import { Room } from '../../types/Room';
import { RemoveRoomAction } from '../../../room-info/actions/RemoveRoomAction';
import { SetSelectPlaceIdAction } from '../actions/SetSelectPlaceIdAction';
import { ResetSelectPlaceIdAction } from '../actions/ResetSelectPlaceIdAction';
import { AddPlaceAction } from '../actions/AddPlaceAction';

const initialState: RoomState = {
    rooms: [],
    selectedRoomId: null,
    selectedPlaceId: null,
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
    | AddPlaceAction;

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

        case AddPlaceAction.type: {
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
        }

        default:
            return state;
    }
}
