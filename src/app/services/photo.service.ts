import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private storageKey = 'photoHistory';
  private photosSubject = new BehaviorSubject<string[]>(this.loadPhotos()); // 🔥 RxJS Store

  photos$ = this.photosSubject.asObservable(); // Expose as Observable

  constructor() {}

  // 🔹 Convert file to Base64 & store in localStorage
  async addPhoto(file: string) {
    const photos = this.loadPhotos();
    photos.push(file);
    localStorage.setItem(this.storageKey, JSON.stringify(photos));
    this.photosSubject.next(photos); // 🔥 Notify subscribers
  }

  // 🔹 Load photos from localStorage
  private loadPhotos(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // 🔹 Convert File to Base64
  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  // 🔹 Clear all stored photos
  clearPhotos() {
    localStorage.removeItem(this.storageKey);
    this.photosSubject.next([]); // 🔥 Notify subscribers
  }
}
