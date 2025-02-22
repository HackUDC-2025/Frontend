import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { ProfileService } from '../store/profile/profile.service';
import { CameraComponent } from '../components/camera/camera.component';
import { ArtCardComponent } from '../components/art-card/art-card.component';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.page.html',
  styleUrls: ['./open-camera.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CameraComponent, ArtCardComponent]
})
export class OpenCameraPage {

  profile$: Observable<string | null>;
  responseData: any;
  capturedImage: string | null = null;

  constructor(private profileService: ProfileService, private httpService: HttpService) {
    this.profile$ = this.profileService.getProfile();
    console.log(this.profile$)
  }

  onImageCaptured(imageBase64: string) {
    this.capturedImage = `data:image/jpeg;base64,${imageBase64}`; 
    console.log('📸 Imagen capturada:', this.capturedImage);

    this.sendImageToServer(imageBase64);
  }
  
  sendImageToServer(imageBase64: string) {

    this.httpService.searchImage(imageBase64).subscribe({
      next: (data) => {
        this.responseData = data;
        console.log('✅ Respuesta del servidor:', this.responseData);
      },
      error: (err) => {
        console.error('❌ Error en la petición:', err.message); 
      },
    });
  }
}
