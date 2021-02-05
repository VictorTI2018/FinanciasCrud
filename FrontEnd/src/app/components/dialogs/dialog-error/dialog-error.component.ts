import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

export interface DialogOptions {
  title?: string
  message?: string
  buttonText?: string
}

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.css']
})
export class DialogErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogErrorComponent>) { }

  ngOnInit(): void {
  }

  public dialogOptions: DialogOptions = {
    title: '',
    message: '',
    buttonText: ''
  }

}
