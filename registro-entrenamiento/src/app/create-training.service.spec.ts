import { TestBed } from '@angular/core/testing';

import { CreateTrainingService } from './create-training.service';

describe('CreateTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTrainingService = TestBed.get(CreateTrainingService);
    expect(service).toBeTruthy();
  });
});
