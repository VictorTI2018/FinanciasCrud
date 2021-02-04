import { Component, OnInit, Input } from '@angular/core';
import { Gastos } from 'src/app/models/gastos/gastos.model';

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls: ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {

  @Input() gastos: Gastos[] = []

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
