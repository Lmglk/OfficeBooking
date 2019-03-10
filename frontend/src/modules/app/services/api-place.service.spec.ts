import { TestBed } from '@angular/core/testing';

import { ApiPlaceService } from './api-place.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiPlaceService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: ApiPlaceService = TestBed.get(ApiPlaceService);
        expect(service).toBeTruthy();
    });
});
