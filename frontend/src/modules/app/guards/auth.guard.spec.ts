import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../types/AppState';
import { userReducer } from '../reducers/user.reducer';
import { roomReducer } from '../reducers/room.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
    let store: Store<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    userState: userReducer,
                    roomState: roomReducer,
                } as ActionReducerMap<AppState>),
                RouterTestingModule,
            ],
            providers: [AuthGuard],
        });

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
