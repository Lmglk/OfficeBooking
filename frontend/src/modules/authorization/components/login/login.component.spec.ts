import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BasicComponentsModule } from '../../../basic-components/basic-components.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RoomLayoutComponent } from '../../../room/components/room-layout/room-layout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, RoomLayoutComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'login', component: LoginComponent },
                    { path: 'room-layout', component: RoomLayoutComponent },
                    { path: '**', component: LoginComponent },
                ]),
                BasicComponentsModule,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
