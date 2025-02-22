import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SearchImageResponseDto } from '../dtos/search-image.dto';
import { ProfileConfig } from '../profiles/profile.interface';

@Injectable({
  providedIn: 'root', 
})
export class HttpService {
  private baseUrl = 'http://193.144.51.204:8000';

  constructor(private http: HttpClient) {}


  searchImage(imageBase64: string, profile: ProfileConfig): Observable<any> {
    const url = `${this.baseUrl}/search`;
    const formData = new FormData();
  
    const byteCharacters = atob(imageBase64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const imageBlob = new Blob([byteArray], { type: "image/jpeg" });
  
    formData.append("file", imageBlob, "photo.jpg");
    formData.append("profile", JSON.stringify(profile));
  
    return this.http.post<SearchImageResponseDto>(url, formData).pipe(
      catchError(this.handleError)
    );
  }
  

  generateAudio(description: string): Observable<any> {
    const url = `${this.baseUrl}/text-to-speech`;

    return this.http.post(url, { text:description }, {
      responseType: 'blob',
    });
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
