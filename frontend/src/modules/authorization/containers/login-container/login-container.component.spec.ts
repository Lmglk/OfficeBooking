import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerComponent } from './login-container.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../app/types/AppState';
import { userReducer } from '../../../app/store/reducers/user.reducer';
import { BasicComponentsModule } from '../../../basic-components/basic-components.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginContainerComponent', () => {
    let component: LoginContainerComponent;
    let fixture: ComponentFixture<LoginContainerComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginContainerComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                StoreModule.forRoot({
                    userState: userReducer,
                } as ActionReducerMap<AppState>),
                BasicComponentsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginContainerComponent);
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
