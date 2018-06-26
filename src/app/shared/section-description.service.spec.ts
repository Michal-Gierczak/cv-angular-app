import { TestBed, inject } from '@angular/core/testing';

import { SectionDescriptionService } from './section-description.service';

describe('SectionDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionDescriptionService]
    });
  });

  it('should be created', inject([SectionDescriptionService], (service: SectionDescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
