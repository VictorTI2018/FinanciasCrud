import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoGastos'
})
export class TipoGastosPipe implements PipeTransform {

  transform(tipoGasto: any): string {
    let valor = ''
    switch (tipoGasto) {
      case 0:
        valor = 'Agua'
        break
      case 1:
        valor = 'Energia'
        break
      case 2:
        valor = 'Mercado'
        break
      case 3:
        valor = 'Casa'
        break
      case 4:
        valor = 'Outros'
        break

    }
    return valor
  }

}
