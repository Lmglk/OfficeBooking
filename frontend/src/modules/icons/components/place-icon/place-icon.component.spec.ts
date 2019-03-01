import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceIconComponent } from './place-icon.component';

describe('PlaceIconComponent', () => {
    let component: PlaceIconComponent;
    let fixture: ComponentFixture<PlaceIconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceIconComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
