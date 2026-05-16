import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          this.snackBar.open(
            'Network error. Please check your connection.',
            'Close',
            { duration: 5000 }
          );
        } else if (error.status === 400) {
          // Pass through — let the calling component handle validation errors
        } else if (error.status === 404) {
          this.snackBar.open(
            'The requested resource was not found.',
            'Close',
            { duration: 5000 }
          );
        } else if (error.status === 500) {
          this.snackBar.open(
            'Something went wrong. Please try again later.',
            'Close',
            { duration: 5000 }
          );
        } else {
          this.snackBar.open(
            'An unexpected error occurred.',
            'Close',
            { duration: 5000 }
          );
        }

        return throwError(() => error);
      })
    );
  }
}
