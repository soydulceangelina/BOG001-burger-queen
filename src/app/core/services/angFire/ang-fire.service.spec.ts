import { TestBed } from '@angular/core/testing';

import { AngFireService } from './ang-fire.service';

xdescribe('AngFireService', () => {
  let service: AngFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
