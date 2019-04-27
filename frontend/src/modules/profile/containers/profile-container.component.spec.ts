import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContainerComponent } from './profile-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';
import { userReducer } from '../../app/reducers/user.reducer';
import { roomReducer } from '../../app/reducers/room.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileContainerComponent', () => {
    let component: ProfileContainerComponent;
    let fixture: ComponentFixture<ProfileContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileContainerComponent],
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({
                    userState: userReducer,
                    roomState: roomReducer,
                } as ActionReducerMap<AppState>),
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
