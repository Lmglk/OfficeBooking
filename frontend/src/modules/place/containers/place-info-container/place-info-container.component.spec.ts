import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInfoContainerComponent } from './place-info-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../app/types/AppState';
import { RouterTestingModule } from '@angular/router/testing';
import { userReducer } from '../../../app/reducers/user.reducer';
import { roomReducer } from '../../../app/reducers/room.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PlaceInfoContainerComponent', () => {
    let component: PlaceInfoContainerComponent;
    let fixture: ComponentFixture<PlaceInfoContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({
                    userState: userReducer,
                    roomState: roomReducer,
                } as ActionReducerMap<AppState>),
            ],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [PlaceInfoContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceInfoContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
