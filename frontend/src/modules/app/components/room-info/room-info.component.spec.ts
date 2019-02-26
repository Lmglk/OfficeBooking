import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInfoComponent } from './room-info.component';
import { BasicComponentsModule } from '../../../basic-components/basic-components.module';

describe('RoomInfoComponent', () => {
    let component: RoomInfoComponent;
    let fixture: ComponentFixture<RoomInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BasicComponentsModule],
            declarations: [RoomInfoComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
