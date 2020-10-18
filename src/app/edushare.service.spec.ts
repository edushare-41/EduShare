import { TestBed } from '@angular/core/testing';

import { EdushareService } from './edushare.service';

describe('EdushareService', () => {
  let service: EdushareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdushareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
