import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { ProfileService } from '../store/profile/profile.service';
import { CameraComponent } from '../components/camera/camera.component';
import { ArtCardComponent } from '../components/art-card/art-card.component';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { IonicModule } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { SearchImageResponseDto } from '../dtos/search-image.dto';
import { TitleParserDto } from '../dtos/title-parse.dto';


@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.page.html',
  styleUrls: ['./open-camera.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,FormsModule, CameraComponent, ArtCardComponent]
})
export class OpenCameraPage {

  profile$: Observable<string | null>;
  responseData: TitleParserDto | null = null;
  recievedData: boolean = false;
  capturedImage: string | null = null;

  constructor(private profileService: ProfileService, private httpService: HttpService) {
    this.profile$ = this.profileService.getProfile();
    console.log(this.profile$)
  }

  async speak() {

  }

  onImageCaptured(imageBase64: string) {
    this.capturedImage = `data:image/jpeg;base64,${imageBase64}`; 

    this.sendImageToServer(imageBase64);
  }

  playAudio(description: string) {
    this.httpService.generateAudio(description).subscribe(
      (blob: Blob) => {
        const audioUrl = URL.createObjectURL(blob);
  
        const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
  
        if (!audioPlayer) {
          console.error("❌ No se encontró el elemento <audio> en el DOM.");
          return;
        }
  
        audioPlayer.src = audioUrl;
  
        audioPlayer.play()
          .then(() => console.log("🎶 Reproducción iniciada."))
          .catch(err => console.error("❌ Error al reproducir audio:", err));
      },
      (error) => {
        console.error('❌ Error al generar el audio:', error);
      }
    );
  }
  
  
  sendImageToServer(imageBase64: string) {
    this.httpService.searchImage(imageBase64).subscribe({
      next: (data: SearchImageResponseDto) => {
        console.log("✅ Respuesta del servidor:", JSON.stringify(data, null, 2));
  
        this.responseData = { 
          title: data.description?.titulo || 'Título do',
          authors: data.description?.autor || 'Autor desconocido',
          year: data.description?.año || 'Año desconocido',
          description: data.description?.descripcion || 'Descripción no disponible'
        };

        this.recievedData = true;

        this.playAudio(this.responseData.description);
      },
      error: (err) => {
        console.error("❌ Error en la petición:", err.message);
      },
      complete: () => {
        console.log("✔ Petición completada.");
      }
    });
  }
  
}
