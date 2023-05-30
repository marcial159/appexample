import { TestBed } from '@angular/core/testing';

import { MyObservableService } from './my-observable.service';

describe('MyObservableService', () => {
  let service: MyObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
