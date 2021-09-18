import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static readonly sum: string = '+';
  static readonly subtraction: string = '-';
  static readonly division: string = '/';
  static readonly multiplication: string = '*';

  constructor() { }


  calculate(num1: number, num2: number,operation:string){
    let result:number;

    if(operation == CalculadoraService.sum){
      return result = num1 + num2
    }else if (operation == CalculadoraService.subtraction){
      return result = num1 - num2
    }else if (operation == CalculadoraService.division){
      return result = num1 / num2
    }else if (operation == CalculadoraService.multiplication){
      return result = num1 * num2
    }else{
      return result = 0
    }

   
  }
}
