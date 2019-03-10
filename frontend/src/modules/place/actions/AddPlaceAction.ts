import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';
import { Place } from '../../app/types/Place';

export class AddPlaceAction implements Action {
    public static readonly type = '[Room] Add place';

    public readonly type = AddPlaceAction.type;

    constructor(
        public readonly payload: {
            id: Room['id'];
            place: Place;
        }
    ) {}
}
