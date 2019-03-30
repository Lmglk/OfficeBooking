import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbListComponent } from './pb-list.component';
import { AnswerPipe } from '../../pipes/answer.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PbListComponent', () => {
    let component: PbListComponent;
    let fixture: ComponentFixture<PbListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PbListComponent, AnswerPipe],
            schemas: [NO_ERRORS_SCHEMA],
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
