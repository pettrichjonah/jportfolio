import { TestBed } from '@angular/core/testing';

import { AgecalcService } from './agecalc.service';

describe('AgecalcService', () => {
  let service: AgecalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgecalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
