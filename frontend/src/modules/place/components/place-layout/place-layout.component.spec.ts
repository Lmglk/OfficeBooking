import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceLayoutComponent } from './place-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../../../app/reducers/user.reducer';
import { roomReducer } from '../../../app/reducers/room.reducer';
import { AppState } from '../../../app/types/AppState';

describe('PlaceLayoutComponent', () => {
    let component: PlaceLayoutComponent;
    let fixture: ComponentFixture<PlaceLayoutComponent>;
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
            declarations: [PlaceLayoutComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceLayoutComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
