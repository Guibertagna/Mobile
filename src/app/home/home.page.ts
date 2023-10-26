import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',  
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor: string = '0';
  numeros: string[] = [];
  operadores: string[] = [];

  adicionarNumero(valor: string) {
    if (this.numeros.length === 0) {
      this.numeros.push(valor);
    } else if (this.operadores.length < this.numeros.length) {
      this.numeros[this.numeros.length - 1] += valor;
    } else {
      this.numeros.push(valor);
    }
    this.atualizarVisor();
  }

  adicionarOperacao(valor: string) {
    if (this.numeros.length > 0  && this.numeros.length !=this.operadores.length)  {
      this.operadores.push(valor);
      this.atualizarVisor();
    }
  }

  inverter() {
    if (this.numeros.length > 0) {
        this.numeros[this.numeros.length - 1] = (parseFloat(this.numeros[this.numeros.length - 1]) * -1).toString();
      this.atualizarVisor();
    } 
  }
  
  porcentagem() {
    if (this.numeros.length > 0) {
      this.numeros[this.numeros.length - 1] = (parseFloat(this.numeros[this.numeros.length - 1]) / 100).toString();
      this.atualizarVisor();
    }
  }

  calcular() {
    if (this.numeros.length >= 2 && this.operadores.length >= 1) {
      let resultado = parseFloat(this.numeros[0]);
      for (let i = 0; i < this.operadores.length; i++) {
        const num2 = parseFloat(this.numeros[i + 1]);
        const operador = this.operadores[i];

        if (!isNaN(num2)) {
          switch (operador) {
            case '+':
              resultado += num2;
              break;
            case '-':
              resultado -= num2;
              break;
            case 'x':
              resultado *= num2;
              break;
            case '÷':
              resultado /= num2;
              break;
          }
        }
      }
      this.numeros = [resultado.toString()];
      this.operadores = [];
      this.atualizarVisor();
    }
  }

  zerar() {
    this.visor = '0';
    this.numeros = [];
    this.operadores = [];
  } 

  atualizarVisor() {
    let expressao = '';
    for (let i = 0; i < this.numeros.length; i++) {
      expressao += this.numeros[i];
      if (i < this.operadores.length) {
        expressao +=  this.operadores[i] ;
      }
    }
    this.visor = expressao;
  }

  constructor() {}
}
