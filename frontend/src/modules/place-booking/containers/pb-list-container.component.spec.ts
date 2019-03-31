import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbListContainerComponent } from './pb-list-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../../app/reducers/user.reducer';
import { roomReducer } from '../../app/reducers/room.reducer';
import { AppState } from '../../app/types/AppState';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PbListContainerComponent', () => {
    let component: PbListContainerComponent;
    let fixture: ComponentFixture<PbListContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PbListContainerComponent],
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
        fixture = TestBed.createComponent(PbListContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
