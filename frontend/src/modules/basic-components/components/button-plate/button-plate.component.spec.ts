import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlateComponent } from './button-plate.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ButtonPlateComponent', () => {
    let component: ButtonPlateComponent;
    let fixture: ComponentFixture<ButtonPlateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonPlateComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonPlateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
