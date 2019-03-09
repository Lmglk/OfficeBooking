import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../../../app/types/Place';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentPlace } from '../../../app/store/selectors/selectCurrentPlace';
import { TryToRemovePlaceAction } from '../../actions/TryToRemovePlaceAction';

@Component({
    selector: 'ob-place-info-container',
    template: `
        <ob-place-info
            [place]="place$ | async"
            (remove)="removePlace($event)"
        ></ob-place-info>
    `,
})
export class PlaceInfoContainerComponent {
    public place$: Observable<Place | null>;

    constructor(private readonly store: Store<AppState>) {
        this.place$ = this.store.pipe(select(selectCurrentPlace));
    }

    public removePlace(place: Place) {
        this.store.dispatch(new TryToRemovePlaceAction(place));
    }
}
