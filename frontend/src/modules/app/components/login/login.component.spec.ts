import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BasicComponentsModule } from '../../../basic-components/basic-components.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

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
                BasicComponentsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
