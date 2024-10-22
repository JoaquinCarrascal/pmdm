import { TestBed } from '@angular/core/testing';

import { SwapiCharServiceService } from './swapi-char-service.service';

describe('SwapiCharServiceService', () => {
  let service: SwapiCharServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiCharServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
