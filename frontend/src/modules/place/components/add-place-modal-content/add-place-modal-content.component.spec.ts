import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceModalContentComponent } from './add-place-modal-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PlaceParameters } from '../../types/PlaceParameters';

describe('AddPlaceModalContentComponent', () => {
    let component: AddPlaceModalContentComponent;
    let fixture: ComponentFixture<AddPlaceModalContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddPlaceModalContentComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPlaceModalContentComponent);
        component = fixture.componentInstance;
        component.parameters = {
            name: '',
            equipment: [],
            description: '',
            isAvailableForBooking: true,
            x: 1,
            y: 1,
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
