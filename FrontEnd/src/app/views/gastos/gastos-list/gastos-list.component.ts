import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gastos } from 'src/app/models/gastos/gastos.model';
import { GastosService } from 'src/app/services/gastos/gastos.service';

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls: ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {

  @Input() gastos: Gastos[] = []

  situacaoConta: boolean = false

  @Output()
  editarFn: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  deletarFn: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  loadFn: EventEmitter<any> = new EventEmitter<any>()

  headers = [
    { label: 'Codigo', value: 'id' },
    { label: 'Gasto', value: 'tipoGasto' },
    { label: 'Pagamento', value: 'tipoPagamento' },
    { label: 'Mês', value: 'mes' },
    { label: 'Valor', value: 'valor' },
    { label: 'Situacao', value: 'situacaoPagamento' },
  ]

  constructor(private gastosService: GastosService) { }

  ngOnInit(): void {
  }

  onChangeSituacaoConta(event: any, id: any) : void {
    const situacao = event ? 1 : 0
    this.gastosService.atualizarSituacao({ situacaoConta: situacao, id: Number(id)})
    .subscribe(result => {
      this.carregarTable()
    })
  }

  carregarTable ():void {
    this.loadFn.emit(null)
  }

  
  editar (id: any) {
    this.editarFn.emit(id)
  }

  deletar(id: any) {
    this.deletarFn.emit(id)
  }
}
