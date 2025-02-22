import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', 
})
export class HttpService {
  private baseUrl = 'http://193.144.51.204:8000/milvus';

  constructor(private http: HttpClient) {}


  searchImage(imageBase64: string): Observable<any> {
    const url = `${this.baseUrl}/search`;
    const requestBody = { image: imageBase64 };

    return this.http.post<any>(url, requestBody).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error ${error.status}: ${error.message}`;
    }

    console.error('Error capturado en HttpService:', errorMessage);
    return throwError(() => new Error(errorMessage)); 
  }



}
