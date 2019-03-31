import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownComponent } from './arrow-down.component';

describe('ArrowDownComponent', () => {
    let component: ArrowDownComponent;
    let fixture: ComponentFixture<ArrowDownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArrowDownComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArrowDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
