import { Component } from '@angular/core';
import { BookParamters } from '../types/BookParamters';
import { AppState } from '../../app/types/AppState';
import { Store } from '@ngrx/store';
import { TryToSaveBookingPlaceAction } from '../actions/TryToSaveBookingPlaceAction';

@Component({
    selector: 'ob-pb-form-container',
    template: `
        <ob-pb-form
            [parameters]="parameters"
            (onchange)="handleChange($event)"
            (submit)="handleSubmit()"
        ></ob-pb-form>
    `,
})
export class PbFormContainerComponent {
    public parameters: BookParamters = {
        fromDate: new Date(),
        toDate: new Date(),
        approved: false,
    };

    constructor(private readonly store: Store<AppState>) {}

    public handleChange(parameters: BookParamters) {
        this.parameters = parameters;
    }

    public handleSubmit() {
        this.store.dispatch(new TryToSaveBookingPlaceAction(this.parameters));
    }
}
