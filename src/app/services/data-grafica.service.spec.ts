import { TestBed } from '@angular/core/testing';

import { DataGraficaService } from './data-grafica.service';

describe('DataGraficaService', () => {
  let service: DataGraficaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGraficaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
