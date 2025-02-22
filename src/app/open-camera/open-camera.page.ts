import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../store/profile/profile.service';
import { CameraComponent } from '../components/camera/camera.component';
import { ArtCardComponent } from '../components/art-card/art-card.component';
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

  responseData: TitleParserDto | null = null;
  recievedData: boolean = false;
  capturedImage: string | null = null;
  photoTaken: boolean = false;

  constructor(private profileService: ProfileService, private httpService: HttpService) {
    
  }

  async speak() {

  }

  onImageCaptured(imageBase64: string) {
    this.capturedImage = `data:image/jpeg;base64,${imageBase64}`; 
    this.photoTaken = true;
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
    
    this.profileService.getProfile().subscribe(profileData =>{

      this.httpService.searchImage(imageBase64, profileData).subscribe({
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
    })
  }
  
}
