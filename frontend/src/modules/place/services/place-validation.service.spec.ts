import { TestBed } from '@angular/core/testing';

import { PlaceValidationService } from './place-validation.service';

describe('PlaceValidationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PlaceValidationService = TestBed.get(
            PlaceValidationService
        );
        expect(service).toBeTruthy();
    });
});
