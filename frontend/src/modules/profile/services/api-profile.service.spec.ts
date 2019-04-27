import { TestBed } from '@angular/core/testing';

import { ApiProfileService } from './api-profile.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiProfileService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: ApiProfileService = TestBed.get(ApiProfileService);
        expect(service).toBeTruthy();
    });
});
