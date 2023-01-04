import { TestBed } from '@angular/core/testing';

import { PlatofuerteService } from './platofuerte.service';

describe('PlatofuerteService', () => {
  let service: PlatofuerteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatofuerteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
