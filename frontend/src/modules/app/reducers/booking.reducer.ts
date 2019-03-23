import { BookingState } from '../types/BookingState';
import { SetBookingListAction } from '../../place-booking/actions/SetBookingListAction';
import { AddBookingItemAction } from '../../place-booking/actions/AddBookingItemAction';
import { RemoveBookingItemAction } from '../../place-booking/actions/RemoveBookingItemAction';
import { ResetBookingListAction } from '../../place-booking/actions/ResetBookingListAction';
import { UpdateBookingItemAction } from '../../place-booking/actions/UpdateBookingItemAction';

const initialState: BookingState = {
    bookingList: [],
};

type Action =
    | SetBookingListAction
    | ResetBookingListAction
    | AddBookingItemAction
    | UpdateBookingItemAction
    | RemoveBookingItemAction;

export function bookingReducer(
    state: BookingState = initialState,
    action: Action
): BookingState {
    switch (action.type) {
        case SetBookingListAction.type:
            return {
                ...state,
                bookingList: action.payload,
            };

        case ResetBookingListAction.type:
            return {
                ...state,
                bookingList: [],
            };

        case AddBookingItemAction.type:
            return {
                ...state,
                bookingList: [...state.bookingList, action.payload],
            };

        case UpdateBookingItemAction.type:
            return {
                ...state,
                bookingList: state.bookingList.map(item =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };

        case RemoveBookingItemAction.type:
            return {
                ...state,
                bookingList: state.bookingList.filter(
                    item => item.id !== action.payload
                ),
            };

        default:
            return state;
    }
}
