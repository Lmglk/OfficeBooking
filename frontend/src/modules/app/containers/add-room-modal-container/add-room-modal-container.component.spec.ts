import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomModalContainerComponent } from './add-room-modal-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../types/AppState';
import { userReducer } from '../../store/reducers/user.reducer';
import { roomReducer } from '../../store/reducers/room.reducer';

describe('AddRoomModalContainerComponent', () => {
    let component: AddRoomModalContainerComponent;
    let fixture: ComponentFixture<AddRoomModalContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddRoomModalContainerComponent],
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
        fixture = TestBed.createComponent(AddRoomModalContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
