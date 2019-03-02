import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomModalContainerComponent } from './add-room-modal-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddRoomModalContainerComponent', () => {
    let component: AddRoomModalContainerComponent;
    let fixture: ComponentFixture<AddRoomModalContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddRoomModalContainerComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddRoomModalContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
