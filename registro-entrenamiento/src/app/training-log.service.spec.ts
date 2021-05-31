import { TestBed } from '@angular/core/testing';

import { TrainingLogService } from './training-log.service';

describe('TrainingLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingLogService = TestBed.get(TrainingLogService);
    expect(service).toBeTruthy();
  });
});
