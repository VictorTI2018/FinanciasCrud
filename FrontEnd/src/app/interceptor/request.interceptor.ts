import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = request.clone({ url: `${environment.baseUrl}/${request.url}` })
    return next.handle(apiRequest).pipe(retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert("Erro na conexão com o servidor");
        return throwError(errorMessage);
      }))
  }
}
