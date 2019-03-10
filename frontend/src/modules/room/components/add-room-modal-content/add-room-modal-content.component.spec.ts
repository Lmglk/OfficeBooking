import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomModalContentComponent } from './add-room-modal-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddRoomModalContentComponent', () => {
    let component: AddRoomModalContentComponent;
    let fixture: ComponentFixture<AddRoomModalContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddRoomModalContentComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddRoomModalContentComponent);
        component = fixture.componentInstance;
        component.parameters = {
            name: '',
            width: 0,
            height: 0,
            description: '',
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
