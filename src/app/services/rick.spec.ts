import { TestBed } from '@angular/core/testing';

import { Rick } from './rick';

describe('Rick', () => {
  let service: Rick;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rick);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
