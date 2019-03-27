import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbListComponent } from './pb-list.component';

describe('PbListComponent', () => {
    let component: PbListComponent;
    let fixture: ComponentFixture<PbListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PbListComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PbListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
