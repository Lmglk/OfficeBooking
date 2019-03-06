import { RoomState } from '../../types/RoomState';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { ResetRoomsAction } from '../actions/ResetRoomsAction';
import { SetSelectRoomIdAction } from '../actions/SetSelectRoomIdAction';
import { ResetSelectRoomIdAction } from '../actions/ResetSelectRoomIdAction';
import { AddRoomAction } from '../actions/AddRoomAction';
import { Room } from '../../types/Room';
import { RemoveRoomAction } from '../actions/RemoveRoomAction';

const initialState: RoomState = {
    rooms: [],
    selectedRoomId: null,
};

type Action =
    | SetRoomsAction
    | ResetRoomsAction
    | SetSelectRoomIdAction
    | ResetSelectRoomIdAction
    | AddRoomAction
    | RemoveRoomAction;

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

        default:
            return state;
    }
}
