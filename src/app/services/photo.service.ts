import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { photoDto } from '../dtos/photo.dto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private storageKey = 'photoHistory';
  private photosSubject = new BehaviorSubject<photoDto[]>(this.loadPhotos()); 

  photos$ = this.photosSubject.asObservable(); 

  constructor() {}

  async addPhoto(title: string,description: string) {
    const photos = this.loadPhotos();
    const item = {
      title,
      description
    }
    photos.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(photos));
    this.photosSubject.next(photos); 
  }

  private loadPhotos(): photoDto[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  clearPhotos() {
    localStorage.removeItem(this.storageKey);
    this.photosSubject.next([]);
  }
}
