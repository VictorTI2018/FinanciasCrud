import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gastos } from 'src/app/models/gastos/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  baseUrl: string = 'gastos'

  constructor(private httpClient: HttpClient) { }

  getAll (mes: string) : Observable<Gastos[]> {
    const urlBase = `${this.baseUrl}/${mes}`
    return this.httpClient.get<Gastos[]>(urlBase)
  }
}
