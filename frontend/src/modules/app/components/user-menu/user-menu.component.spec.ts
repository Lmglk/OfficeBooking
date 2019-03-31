import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../types/AppState';
import { RouterTestingModule } from '@angular/router/testing';
import { userReducer } from '../../reducers/user.reducer';
import { roomReducer } from '../../reducers/room.reducer';
import { bookingReducer } from '../../reducers/booking.reducer';

describe('UserMenuComponent', () => {
    let component: UserMenuComponent;
    let fixture: ComponentFixture<UserMenuComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({
                    userState: userReducer,
                    roomState: roomReducer,
                    bookingState: bookingReducer,
                } as ActionReducerMap<AppState>),
            ],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [UserMenuComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserMenuComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
