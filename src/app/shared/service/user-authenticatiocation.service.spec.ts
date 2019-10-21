import { TestBed } from '@angular/core/testing';

import { UserAuthenticatiocationService } from './user-authenticatiocation.service';

describe('UserAuthenticatiocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAuthenticatiocationService = TestBed.get(UserAuthenticatiocationService);
    expect(service).toBeTruthy();
  });
});
