import { MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';

export interface Contas {
  nome: string
  total: number
}

export interface DialogTotalOptions {
  total: number
  mes: string
}

@Component({
  selector: 'app-dialog-total',
  templateUrl: './dialog-total.component.html',
  styleUrls: ['./dialog-total.component.css']
})
export class DialogTotalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTotalComponent>) { }

  ngOnInit(): void {
  }

  public dialogTotalOptions: DialogTotalOptions = {
    total: 0,
    mes: ''
  }

}
