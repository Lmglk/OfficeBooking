import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsLayoutComponent } from './rs-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RsLayoutComponent', () => {
    let component: RsLayoutComponent;
    let fixture: ComponentFixture<RsLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RsLayoutComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RsLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
