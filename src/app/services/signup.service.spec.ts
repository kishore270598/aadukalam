import { TestBed } from '@angular/core/testing';

import { Signupservice } from './signup.service';

describe('LoginService', () => {
  let service: Signupservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signupservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
