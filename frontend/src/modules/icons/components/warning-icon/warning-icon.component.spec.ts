import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningIconComponent } from './warning-icon.component';

describe('WarningIconComponent', () => {
    let component: WarningIconComponent;
    let fixture: ComponentFixture<WarningIconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WarningIconComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WarningIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
