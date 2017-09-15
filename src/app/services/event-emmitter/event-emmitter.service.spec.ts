import { TestBed, inject } from '@angular/core/testing';

import { EventEmmitterService } from './event-emmitter.service';

describe('EventEmmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventEmmitterService]
    });
  });

  it('should be created', inject([EventEmmitterService], (service: EventEmmitterService) => {
    expect(service).toBeTruthy();
  }));
});
