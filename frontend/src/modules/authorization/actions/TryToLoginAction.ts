import { Action } from '@ngrx/store';
import { LoginParameters } from '../types/LoginParameters';

export class TryToLoginAction implements Action {
    public static readonly type = '[Login] Try to login';

    public readonly type = TryToLoginAction.type;

    constructor(public readonly payload: LoginParameters) {}
}
