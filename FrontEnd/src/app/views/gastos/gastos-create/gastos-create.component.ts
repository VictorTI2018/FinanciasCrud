import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialogRef, MatDialog } from '@angular/material/dialog'

import { Gastos } from 'src/app/models/gastos/gastos.model';
import { GastosService } from 'src/app/services/gastos/gastos.service';
import { DialogErrorComponent } from '../../../components/dialogs/dialog-error/dialog-error.component'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-gastos-create',
  templateUrl: './gastos-create.component.html',
  styleUrls: ['./gastos-create.component.css']
})
export class GastosCreateComponent implements OnInit {

  dialogRef: MatDialogRef<DialogErrorComponent>| undefined

  registerForm = new FormGroup({
    tipoGasto: new FormControl('', [
      Validators.required
    ]),
    tipoPagamento: new FormControl('', [
      Validators.required
    ]),
    mes: new FormControl('', [
      Validators.required
    ]),
    valor: new FormControl(0, [
      Validators.required
    ])
  });
  submitted = false

  matcher = new MyErrorStateMatcher()

  gasto: Gastos = {
    tipoGasto: 0,
    tipoPagamento: 0,
    mes: '',
    valor: 0
  }

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


  constructor(private router: Router, private gastosService: GastosService,
    private routerParams: ActivatedRoute ) { }

  ngOnInit(): void {
    if(this.routerParams.snapshot.paramMap.get('id') !== null) {
      let id = Number(this.routerParams.snapshot.paramMap.get('id'))
      this.buscarGasto(id)
    }
  }

  handleSubmit () :void {
    this.submitted = true
    if (this.registerForm.invalid) {
      this.errorMessage()
      return
    }
    this.salvar()
  }

  salvar (): void {
    this.gasto = this.registerForm.value
    this.gastosService.create(this.gasto)
    .subscribe(result => {
      this.gastosService.showMessage({
        msg: 'Gasto cadastrado com sucesso!',
        duration: 3000,
        classBgColor: 'alert-success'
      })
    })
    this.voltar()
  }

  voltar () {
    this.router.navigate(['/gastos'])
  }

  get form() { return this.registerForm.controls }

  onReset () {
    this.submitted = false
    this.registerForm.reset()
  }

  errorMessage () :void {
    this.gastosService.showMessage({
      msg: 'Por favor, corrija os campos em vermelhos',
      duration: 3000,
      classBgColor: 'alert-danger'
    })
  }

  buscarGasto (id: number) {
    this.gastosService.getById(id)
    .subscribe(result => {
      this.registerForm.patchValue({
        tipoGasto: result.tipoGasto,
        tipoPagamento: result.tipoPagamento,
        mes: result.mes,
        valor: result.valor
      })
    })
  }
}
