import { TestBed } from '@angular/core/testing';

import { SwapiCarServiceService } from './swapi-car-service.service';

describe('SwapiCarServiceService', () => {
  let service: SwapiCarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiCarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
