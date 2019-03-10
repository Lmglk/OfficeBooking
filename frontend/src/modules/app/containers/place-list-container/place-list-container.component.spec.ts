import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceListContainerComponent } from './place-list-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../types/AppState';
import { userReducer } from '../../store/reducers/user.reducer';
import { roomReducer } from '../../store/reducers/room.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PlaceListContainerComponent', () => {
    let component: PlaceListContainerComponent;
    let fixture: ComponentFixture<PlaceListContainerComponent>;
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
            declarations: [PlaceListContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceListContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
