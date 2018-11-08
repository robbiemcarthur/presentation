import { TestBed } from '@angular/core/testing';

import { ValleysService } from './valleys.service';

describe('ValleysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValleysService = TestBed.get(ValleysService);
    expect(service).toBeTruthy();
  });
});
