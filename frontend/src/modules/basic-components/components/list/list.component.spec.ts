import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListComponent } from './list.component';
import { ListItem } from '../../types/ListItem';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from '../../pipes/sort.pipe';

describe('ListComponent', () => {
    let component: ListComponent<ListItem>;
    let fixture: ComponentFixture<ListComponent<ListItem>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent, FilterPipe, SortPipe],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
