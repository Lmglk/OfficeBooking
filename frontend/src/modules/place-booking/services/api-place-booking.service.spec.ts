import { TestBed } from '@angular/core/testing';

import { ApiPlaceBookingService } from './api-place-booking.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiPlaceBookingService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: ApiPlaceBookingService = TestBed.get(
            ApiPlaceBookingService
        );
        expect(service).toBeTruthy();
    });
});
