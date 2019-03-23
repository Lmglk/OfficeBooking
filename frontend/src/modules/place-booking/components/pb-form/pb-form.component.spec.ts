import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbFormComponent } from './pb-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PbFormComponent', () => {
    let component: PbFormComponent;
    let fixture: ComponentFixture<PbFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PbFormComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PbFormComponent);
        component = fixture.componentInstance;
        component.parameters = {
            fromDate: new Date(),
            toDate: new Date(),
            approved: false,
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
