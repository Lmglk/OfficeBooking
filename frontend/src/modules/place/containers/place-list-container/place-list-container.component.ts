import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../../../app/types/Place';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectPlaces } from '../../selectors/selectPlaces';
import { SetSelectPlaceIdAction } from '../../actions/SetSelectPlaceIdAction';
import { selectCurrentPlaceId } from '../../selectors/selectCurrentPlaceId';

@Component({
    selector: 'ob-place-list-container',
    template: `
        <ob-list
            [data]="places$ | async"
            [bindField]="'name'"
            [selectedValueId]="selectedPlaceId$ | async"
            (selected)="selectPlace($event)"
        ></ob-list>
    `,
})
export class PlaceListContainerComponent {
    public places$: Observable<Place[]>;
    public selectedPlaceId$: Observable<number | null>;

    constructor(private readonly store: Store<AppState>) {
        this.places$ = this.store.pipe(select(selectPlaces));
        this.selectedPlaceId$ = this.store.pipe(select(selectCurrentPlaceId));
    }

    public selectPlace(place: Place): void {
        this.store.dispatch(new SetSelectPlaceIdAction(place.id));
    }
}
