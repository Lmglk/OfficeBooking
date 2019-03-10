import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInfoComponent } from './place-info.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PlaceInfoComponent', () => {
    let component: PlaceInfoComponent;
    let fixture: ComponentFixture<PlaceInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceInfoComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
