import { TestBed } from '@angular/core/testing';

import { CommandAssocService } from './command-assoc.service';

describe('CommandAssocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandAssocService = TestBed.get(CommandAssocService);
    expect(service).toBeTruthy();
  });
});
