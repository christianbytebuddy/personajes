import { TestBed } from '@angular/core/testing';

import { Dragon } from './dragon';

describe('Dragon', () => {
  let service: Dragon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dragon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
