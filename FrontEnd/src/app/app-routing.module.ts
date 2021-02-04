import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GastosCreateComponent } from './views/gastos/gastos-create/gastos-create.component'
import { GastosComponent } from './views/gastos/gastos.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/gastos',
    pathMatch: 'full'
  },
  {
    path: 'gastos',
    component: GastosComponent
  },
  {
    path: 'gastos/dados',
    component: GastosCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
