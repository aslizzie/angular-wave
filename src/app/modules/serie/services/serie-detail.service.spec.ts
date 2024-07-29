import { TestBed } from '@angular/core/testing';

import { SerieDetailService } from './serie-detail.service';

describe('SerieDetailService', () => {
  let service: SerieDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
