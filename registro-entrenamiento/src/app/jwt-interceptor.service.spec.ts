import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt-interceptor.service';

describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtInterceptor = TestBed.get(JwtInterceptor);
    expect(service).toBeTruthy();
  });
});
