import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationContainerComponent } from './registration-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../app/types/AppState';
import { userReducer } from '../../../app/store/reducers/user.reducer';
import { roomReducer } from '../../../app/store/reducers/room.reducer';

describe('RegistrationContainerComponent', () => {
    let component: RegistrationContainerComponent;
    let fixture: ComponentFixture<RegistrationContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrationContainerComponent],
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
        fixture = TestBed.createComponent(RegistrationContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
