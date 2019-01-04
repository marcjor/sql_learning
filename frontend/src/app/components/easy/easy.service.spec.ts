import { TestBed } from '@angular/core/testing';

import { EasyService } from './easy.service';

describe('EasyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyService = TestBed.get(EasyService);
    expect(service).toBeTruthy();
  });
});
