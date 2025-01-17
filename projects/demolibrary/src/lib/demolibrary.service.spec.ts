import { TestBed } from '@angular/core/testing';

import { DemolibraryService } from './demolibrary.service';

describe('DemolibraryService', () => {
  let service: DemolibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemolibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
