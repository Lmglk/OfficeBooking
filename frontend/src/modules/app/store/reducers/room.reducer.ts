import { RoomState } from '../../types/RoomState';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { ResetRoomsAction } from '../actions/ResetRoomsAction';
import { SetSelectRoomIdAction } from '../actions/SetSelectRoomIdAction';
import { ResetSelectRoomIdAction } from '../actions/ResetSelectRoomIdAction';
import { AddRoomAction } from '../actions/AddRoomAction';
import { Room } from '../../types/Room';

const initialState: RoomState = {
    rooms: [],
    selectedRoomId: null,
};

type Action =
    | SetRoomsAction
    | ResetRoomsAction
    | SetSelectRoomIdAction
    | ResetSelectRoomIdAction
    | AddRoomAction;

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

        default:
            return state;
    }
}
