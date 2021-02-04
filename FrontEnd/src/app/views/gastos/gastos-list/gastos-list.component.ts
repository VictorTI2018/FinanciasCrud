import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/models/gastos/gastos.model';

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls: ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {

  gastos: Gastos[] = [
    { id: 1, tipoGasto: 0, tipoPagamento: 2, mes: 'Janeiro', valor: 50 },
    { id: 2, tipoGasto: 1, tipoPagamento: 1, mes: 'Janeiro', valor: 50 },
    { id: 3, tipoGasto: 2, tipoPagamento: 0, mes: 'Janeiro', valor: 50 },
    { id: 4, tipoGasto: 3, tipoPagamento: 2, mes: 'Janeiro', valor: 50 },
    { id: 5, tipoGasto: 4, tipoPagamento: 1, mes: 'Janeiro', valor: 50 },
  ]

  headers = [
    { label: 'Codigo', value: 'id' },
    { label: 'Gasto', value: 'tipoGasto' },
    { label: 'Pagamento', value: 'tipoPagamento' },
    { label: 'Mês', value: 'mes' },
    { label: 'Valor', value: 'valor' },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
