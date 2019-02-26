import { TestBed } from '@angular/core/testing';

import { RoomService } from './room.service';
import { HttpClientModule } from '@angular/common/http';

describe('RoomService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: RoomService = TestBed.get(RoomService);
        expect(service).toBeTruthy();
    });
});
