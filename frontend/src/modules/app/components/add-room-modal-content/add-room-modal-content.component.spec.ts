import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomModalContentComponent } from './add-room-modal-content.component';

describe('AddRoomModalContentComponent', () => {
    let component: AddRoomModalContentComponent;
    let fixture: ComponentFixture<AddRoomModalContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddRoomModalContentComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddRoomModalContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
