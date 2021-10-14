import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  private number1: string = '';
  private number2!:any;
  private result:number = 0;
  private operation:string = '';

  constructor(private calculdoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.clear();
  }

  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.number2 = null;
    this.number2 = null
  }

  addNewNumber(number:string): void {
    if (this.operation === null){
      this.number1 = this.concat(this.number1, number)
    }else{
      this.number2 = this.concat(this.number2, number)
    }
  }

  concat(actualNumber:string, numConcat:string):string{
    //caso contenha apenas '0' ou nulo, reinicia o valor
    if (actualNumber === '0' || actualNumber === null){
      actualNumber = '';
    }
    //Primeiro digito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && actualNumber === ''){
      return '0.';
    }
    //Caso '.' digitado e já contenha '.', apenas retorna
    if(numConcat === '.' && actualNumber.indexOf('.')> -1){
      return actualNumber;
    }

    return actualNumber + numConcat;
  }

  operationDefine(defineOperation:string): void{
    //define operação caso não exista uma
    if(this.operation === null){
      this.operation = defineOperation;
      return;
    }
    if(this.number2 !== null){
      this.result = this.calculdoraService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
        this.operation = defineOperation;
        this.number1 = this.result.toString();
        this.number2 = null;
       
    }
  }
}
