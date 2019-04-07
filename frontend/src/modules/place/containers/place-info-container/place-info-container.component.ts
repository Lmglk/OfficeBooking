import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../../../app/types/Place';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentPlace } from '../../selectors/selectCurrentPlace';
import { TryToRemovePlaceAction } from '../../actions/TryToRemovePlaceAction';
import { Role } from '../../../app/enums/Role';
import { selectUserRole } from '../../../app/selectors/selectUserRole';

@Component({
    selector: 'ob-place-info-container',
    template: `
        <ob-place-info
            [place]="place$ | async"
            [userRole]="userRole$ | async"
            (remove)="removePlace($event)"
        ></ob-place-info>
    `,
})
export class PlaceInfoContainerComponent {
    public place$: Observable<Place | null>;
    public userRole$: Observable<Role>;

    constructor(private readonly store: Store<AppState>) {
        this.place$ = this.store.pipe(select(selectCurrentPlace));
        this.userRole$ = this.store.pipe(select(selectUserRole));
    }

    public removePlace(place: Place) {
        this.store.dispatch(new TryToRemovePlaceAction(place));
    }
}
