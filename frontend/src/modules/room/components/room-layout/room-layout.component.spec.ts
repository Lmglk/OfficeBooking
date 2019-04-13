import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomLayoutComponent } from './room-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../../../app/reducers/user.reducer';
import { roomReducer } from '../../../app/reducers/room.reducer';
import { AppState } from '../../../app/types/AppState';

describe('RoomLayoutComponent', () => {
    let component: RoomLayoutComponent;
    let fixture: ComponentFixture<RoomLayoutComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoomLayoutComponent],
            imports: [
                StoreModule.forRoot({
                    userState: userReducer,
                    roomState: roomReducer,
                } as ActionReducerMap<AppState>),
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomLayoutComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
