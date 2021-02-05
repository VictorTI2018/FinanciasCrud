import { DialogTotalComponent } from './../../components/dialogs/dialog-total/dialog-total.component';
import { DialogErrorComponent } from './../../components/dialogs/dialog-error/dialog-error.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  dialogRef: MatDialogRef<DialogErrorComponent> | undefined
  dialogTotal: MatDialogRef<DialogTotalComponent> | undefined

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

  constructor(private router: Router, private gastosService: GastosService, 
    private dialog: MatDialog) { }

  

  ngOnInit(): void {
  }

  editar (event: any) {
    this.router.navigate(['/gastos/dados', event])
  }

  deletar(event: any) {
    this.dialogRef = this.dialog.open(DialogErrorComponent, {
      disableClose: false
    })

    this.dialogRef.componentInstance.dialogOptions.message = "Deseja realmente apagar esse gasto?"
    this.dialogRef.componentInstance.dialogOptions.title = "Deletar"
    this.dialogRef.componentInstance.dialogOptions.buttonText = "Ok"
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gastosService.delete(Number(event))
        .subscribe(result => {
          this.gastosService.showMessage({
            msg: 'Gasto apagado com sucesso!',
            duration: 3000,
            classBgColor: 'alert-success'
          })
          this.buscarTodosPorMes(this.mes)
        })
        console.log()
      }
    })
  }

  novoGasto () : void {
    this.router.navigate(['/gastos/dados'])
  }

  onChangeMes (mes: string): void {
    this.buscarTodosPorMes(mes)
  }

  pegarTotalPorMes (): number {
    const gastoDoMes = this.gastos.filter(x => x.mes === this.mes 
      && x.situacaoConta !== 1)
    let total = 0
    for(let i = 0; i < gastoDoMes.length; i++) {
      total += gastoDoMes[i].valor
    }
    return total
  }

  dialogValorTotal () :void {
    this.dialogTotal = this.dialog.open(DialogTotalComponent, {
      disableClose: false
    })

    this.dialogTotal.componentInstance.dialogTotalOptions.mes = this.mes
    this.dialogTotal.componentInstance.dialogTotalOptions.total = this.pegarTotalPorMes()
  }

  carregarTable () :void {
    this.buscarTodosPorMes(this.mes)
  }

  buscarTodosPorMes (mes: string) {
    this.gastosService.getAll(mes)
    .subscribe(result => {
      this.gastos = result
    })
  }

}
