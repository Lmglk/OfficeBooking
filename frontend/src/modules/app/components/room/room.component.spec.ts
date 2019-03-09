import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomComponent } from './room.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RoomComponent', () => {
    let component: RoomComponent;
    let fixture: ComponentFixture<RoomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [RoomComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
