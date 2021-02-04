import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gastos } from 'src/app/models/gastos/gastos.model';

@Component({
  selector: 'app-gastos-create',
  templateUrl: './gastos-create.component.html',
  styleUrls: ['./gastos-create.component.css']
})
export class GastosCreateComponent implements OnInit {

  tipoGastos = [
    { label: 'Agua', value: 0},
    { label: 'Energia', value: 0},
    { label: 'Mercado', value: 0},
    { label: 'Casa', value: 0},
    { label: 'Outros', value: 0}
  ]

  tipoPagamento = [
    { label: 'Cartão de Crédito', value: 0 },
    { label: 'Cartão de Débito', value: 1 },
    { label: 'Dinheiro', value: 2 },
  ]

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

  gastosDados: Gastos = {
    id: 0,
    tipoGasto: 0,
    tipoPagamento: 0,
    nomeCartao: '',
    valor: 0,
    mes: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar () {
    this.router.navigate(['/gastos'])
  }
}
