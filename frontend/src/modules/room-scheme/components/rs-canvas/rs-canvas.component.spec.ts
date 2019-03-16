import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsCanvasComponent } from './rs-canvas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RsCanvasComponent', () => {
    let component: RsCanvasComponent;
    let fixture: ComponentFixture<RsCanvasComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RsCanvasComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RsCanvasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
