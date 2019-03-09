import { TestBed } from '@angular/core/testing';

import { ApiAuthService } from './api-auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiAuthService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: ApiAuthService = TestBed.get(ApiAuthService);
        expect(service).toBeTruthy();
    });
});
