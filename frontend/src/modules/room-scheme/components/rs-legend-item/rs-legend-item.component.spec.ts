import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsLegendItemComponent } from './rs-legend-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RsLegendItemComponent', () => {
    let component: RsLegendItemComponent;
    let fixture: ComponentFixture<RsLegendItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RsLegendItemComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RsLegendItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
