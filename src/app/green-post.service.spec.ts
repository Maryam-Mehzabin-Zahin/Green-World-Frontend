import { TestBed } from '@angular/core/testing';

import { GreenPostService } from './green-post.service';

describe('GreenPostService', () => {
  let service: GreenPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
