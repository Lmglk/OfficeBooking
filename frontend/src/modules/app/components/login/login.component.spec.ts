import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BasicComponentsModule } from '../../../basic-components/basic-components.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../types/AppState';
import { userReducer } from '../../store/reducers/user.reducer';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let store: Store<AppState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, HomeComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'login', component: LoginComponent },
                    { path: 'home', component: HomeComponent },
                    { path: '**', component: LoginComponent },
                ]),
                StoreModule.forRoot({
                    userState: userReducer,
                } as ActionReducerMap<AppState>),
                BasicComponentsModule,
            ],
        }).compileComponents();

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
