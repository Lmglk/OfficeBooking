import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbFormContainerComponent } from './pb-form-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../../app/reducers/user.reducer';
import { roomReducer } from '../../app/reducers/room.reducer';
import { AppState } from '../../app/types/AppState';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PbFormContainerComponent', () => {
    let component: PbFormContainerComponent;
    let fixture: ComponentFixture<PbFormContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PbFormContainerComponent],
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
        fixture = TestBed.createComponent(PbFormContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
