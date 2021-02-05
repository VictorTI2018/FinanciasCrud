import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

import { Gastos } from 'src/app/models/gastos/gastos.model';

export interface MessageOptions {
  msg: string
  duration: number
  classColor?: string,
  classBgColor: string
}

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  baseUrl: string = 'gastos'

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  getAll (mes: string) : Observable<Gastos[]> {
    const urlBase = `${this.baseUrl}/${mes}`
    return this.httpClient.get<Gastos[]>(urlBase)
  }

  getById(id: number): Observable<Gastos> {
    const urlBase = `${this.baseUrl}/obterPorId/${id}`
    return this.httpClient.get<Gastos>(urlBase)
  }

  create (gastos: Gastos): Observable<Gastos> {
    return this.httpClient.post<Gastos>(this.baseUrl, gastos)
  }

  update(gastos: Gastos): Observable<Gastos> {
    return this.httpClient.put<Gastos>(this.baseUrl, gastos)
  }

  delete (id: number): Observable<Gastos> {
    const urlBase = `${this.baseUrl}/${id}`
    return this.httpClient.delete<Gastos>(urlBase)
  }

  showMessage(messageOptions: MessageOptions) : void {
    this.snackBar.open(messageOptions.msg, 'X', {
      duration: messageOptions.duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: messageOptions.classBgColor
    })
  }
}
