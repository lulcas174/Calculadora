import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('function sum',()=>{
    let sum = service.calculate(1,2,CalculadoraService.sum);
    expect(sum).toEqual(3)
  });

  it('function subtraction',()=>{
    let subraction = service.calculate(1,2,CalculadoraService.subtraction);
    expect(subraction).toEqual(-1)
  });

  it('function division',()=>{
    let division = service.calculate(10,1,CalculadoraService.division);
    expect(division).toEqual(10)
  });
  
  it('function multiplication',()=>{
    let multiplication = service.calculate(5,5,CalculadoraService.multiplication);
    expect(multiplication).toEqual(25)
  })
});
