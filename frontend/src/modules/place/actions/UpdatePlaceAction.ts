import { Action } from '@ngrx/store';
import { Place } from '../../app/types/Place';
import { Room } from '../../app/types/Room';

export class UpdatePlaceAction implements Action {
    public static readonly type = '[Place] Update';

    public readonly type = UpdatePlaceAction.type;

    constructor(
        public readonly payload: {
            id: Room['id'];
            place: Place;
        }
    ) {}
}
