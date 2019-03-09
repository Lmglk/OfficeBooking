import { TestBed } from '@angular/core/testing';

import { ApiRoomService } from './api-room.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiRoomService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: ApiRoomService = TestBed.get(ApiRoomService);
        expect(service).toBeTruthy();
    });
});
