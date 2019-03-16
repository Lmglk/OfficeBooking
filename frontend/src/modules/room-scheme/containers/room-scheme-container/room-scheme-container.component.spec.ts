import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSchemeContainerComponent } from './room-scheme-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../app/types/AppState';
import { userReducer } from '../../../app/reducers/user.reducer';
import { roomReducer } from '../../../app/reducers/room.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RoomSchemeContainerComponent', () => {
    let component: RoomSchemeContainerComponent;
    let fixture: ComponentFixture<RoomSchemeContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoomSchemeContainerComponent],
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
        fixture = TestBed.createComponent(RoomSchemeContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        component.room = {
            description: '',
            height: 23,
            id: 13,
            name: 'Room_test',
            places: [],
            width: 21,
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
