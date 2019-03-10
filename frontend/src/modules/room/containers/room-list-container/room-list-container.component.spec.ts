import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListContainerComponent } from './room-list-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../../../app/reducers/user.reducer';
import { roomReducer } from '../../../app/reducers/room.reducer';

describe('RoomListContainerComponent', () => {
    let component: RoomListContainerComponent;
    let fixture: ComponentFixture<RoomListContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    userState: userReducer,
                    roomState: roomReducer,
                } as ActionReducerMap<AppState>),
            ],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [RoomListContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomListContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
