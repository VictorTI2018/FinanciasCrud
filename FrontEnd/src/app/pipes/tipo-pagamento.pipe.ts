import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoPagamento'
})
export class TipoPagamentoPipe implements PipeTransform {

  transform(tipoPagamento: any): string {
    let valor = ''
    switch(tipoPagamento) {
      case 0:
        valor = 'Cartão de Crédito'
        break;
      case 1:
        valor = 'Cartão de Débito'
        break;
      case 2:
        valor = 'Dinheiro'
        break;
    }
    return valor
  }

}
