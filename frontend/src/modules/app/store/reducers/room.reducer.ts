import { RoomState } from '../../types/RoomState';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { ResetRoomsAction } from '../actions/ResetRoomsAction';
import { SetSelectRoomIdAction } from '../actions/SetSelectRoomIdAction';
import { ResetSelectRoomIdAction } from '../actions/ResetSelectRoomIdAction';

const initialState: RoomState = {
    rooms: [],
    selectedRoomId: null,
};

type Action =
    | SetRoomsAction
    | ResetRoomsAction
    | SetSelectRoomIdAction
    | ResetSelectRoomIdAction;

export function roomReducer(
    state: RoomState = initialState,
    action: Action
): RoomState {
    switch (action.type) {
        case SetRoomsAction.type:
            return {
                ...state,
                rooms: action.payload,
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

        default:
            return state;
    }
}
