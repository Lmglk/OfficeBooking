import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsCellComponent } from './rs-cell.component';
import { CellType } from '../../enums/CellType';

describe('RsCellComponent', () => {
    let component: RsCellComponent;
    let fixture: ComponentFixture<RsCellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RsCellComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RsCellComponent);
        component = fixture.componentInstance;
        component.cell = {
            x: 0,
            y: 0,
            roomId: 0,
            type: CellType.EMPTY,
        };
        component.size = 0;
        component.padding = 0;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
