import { TestBed } from '@angular/core/testing';

import { RoomValidationService } from './room-validation.service';

describe('RoomValidationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: RoomValidationService = TestBed.get(
            RoomValidationService
        );
        expect(service).toBeTruthy();
    });
});
