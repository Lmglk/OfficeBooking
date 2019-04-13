import { TestBed } from '@angular/core/testing';

import { BookingValidationService } from './booking-validation.service';

describe('BookingValidationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BookingValidationService = TestBed.get(
            BookingValidationService
        );
        expect(service).toBeTruthy();
    });
});
