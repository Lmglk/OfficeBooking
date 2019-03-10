import { Action } from '@ngrx/store';
import { Place } from '../../app/types/Place';
import { Room } from '../../app/types/Room';

export class RemovePlaceAction implements Action {
    public static readonly type = '[Place] Remove';

    public readonly type = RemovePlaceAction.type;

    constructor(
        public readonly payload: {
            roomId: Room['id'];
            placeId: Place['id'];
        }
    ) {}
}
