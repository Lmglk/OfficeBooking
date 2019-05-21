import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsBorderComponent } from './rs-border.component';

describe('RsBorderComponent', () => {
    let component: RsBorderComponent;
    let fixture: ComponentFixture<RsBorderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RsBorderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RsBorderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
