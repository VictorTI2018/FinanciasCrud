import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { RequestInterceptor } from './interceptor/request.interceptor'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersComponent } from './components/templates/headers/headers.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { GastosComponent } from './views/gastos/gastos.component';
import { GastosListComponent } from './views/gastos/gastos-list/gastos-list.component';
import { GastosCreateComponent } from './views/gastos/gastos-create/gastos-create.component';
import { TipoGastosPipe } from './pipes/tipo-gastos.pipe';
import { TipoPagamentoPipe } from './pipes/tipo-pagamento.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogErrorComponent } from './components/dialogs/dialog-error/dialog-error.component';
import { DialogTotalComponent } from './components/dialogs/dialog-total/dialog-total.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    NavComponent,
    GastosComponent,
    GastosListComponent,
    GastosCreateComponent,
    TipoGastosPipe,
    TipoPagamentoPipe,
    DialogErrorComponent,
    DialogTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
