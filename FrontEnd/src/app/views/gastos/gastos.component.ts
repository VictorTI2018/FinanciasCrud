import { Gastos } from './../../models/gastos/gastos.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GastosService } from '../../services/gastos/gastos.service'

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  mes: string = ''

  gastos: Gastos[] = []

  constructor(private router: Router, private gastosService: GastosService) { }

  

  ngOnInit(): void {
  }

  novoGasto () : void {
    this.router.navigate(['/gastos/dados'])
  }

  onChangeMes (mes: string): void {
    this.buscarTodosPorMes(mes)
  }

  buscarTodosPorMes (mes: string) {
    this.gastosService.getAll(mes)
    .subscribe(result => {
      this.gastos = result
    })
  }

}
