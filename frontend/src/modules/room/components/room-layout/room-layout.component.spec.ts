import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomLayoutComponent } from './room-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RoomLayoutComponent', () => {
    let component: RoomLayoutComponent;
    let fixture: ComponentFixture<RoomLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoomLayoutComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
