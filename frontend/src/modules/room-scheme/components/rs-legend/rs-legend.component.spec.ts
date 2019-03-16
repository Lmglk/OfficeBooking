import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsLegendComponent } from './rs-legend.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RsLegendComponent', () => {
    let component: RsLegendComponent;
    let fixture: ComponentFixture<RsLegendComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RsLegendComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RsLegendComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
