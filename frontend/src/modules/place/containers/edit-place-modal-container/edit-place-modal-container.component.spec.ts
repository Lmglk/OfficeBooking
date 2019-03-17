import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceModalContainerComponent } from './edit-place-modal-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../app/types/AppState';
import { userReducer } from '../../../app/reducers/user.reducer';
import { roomReducer } from '../../../app/reducers/room.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditPlaceModalContainerComponent', () => {
    let component: EditPlaceModalContainerComponent;
    let fixture: ComponentFixture<EditPlaceModalContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditPlaceModalContainerComponent],
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
        fixture = TestBed.createComponent(EditPlaceModalContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
