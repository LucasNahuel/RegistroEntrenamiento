import { TestBed } from '@angular/core/testing';

import { JwtAuthorizeGuardService } from './jwt-authorize-guard.service';

describe('JwtAuthorizeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtAuthorizeGuardService = TestBed.get(JwtAuthorizeGuardService);
    expect(service).toBeTruthy();
  });
});
