import { Action } from '@ngrx/store';
import { ProfileParameters } from '../types/ProfileParameters';

export class TryToSaveProfileDataAction implements Action {
    public static readonly type = '[Profile] Try to save';

    public readonly type = TryToSaveProfileDataAction.type;

    constructor(public readonly payload: ProfileParameters) {}
}
