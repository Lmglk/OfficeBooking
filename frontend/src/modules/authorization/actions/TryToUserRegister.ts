import { Action } from '@ngrx/store';
import { SendUserParameters } from '../types/SendUserParameters';

export class TryToUserRegister implements Action {
    public static readonly type = '[User] Try to register';

    public readonly type = TryToUserRegister.type;

    constructor(public readonly payload: SendUserParameters) {}
}
