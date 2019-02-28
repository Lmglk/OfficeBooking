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
        component.room = {
            id: 1,
            name: 'Room_test',
            placesList: [],
            description: '',
            width: 0,
            height: 0,
        };
        component.usedPlaces = 0;
        component.availablePlacesForBooking = 0;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
