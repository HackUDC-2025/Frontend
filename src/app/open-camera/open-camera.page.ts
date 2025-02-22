import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../store/profile/profile.service';
import { CameraComponent } from '../components/camera/camera.component';
import { ArtCardComponent } from '../components/art-card/art-card.component';
import { IonicModule } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { SearchImageResponseDto } from '../dtos/search-image.dto';
import { TitleParserDto } from '../dtos/title-parse.dto';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.page.html',
  styleUrls: ['./open-camera.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, CameraComponent, ArtCardComponent]
})
export class OpenCameraPage {

  photos: string[] = [];
  responseData: TitleParserDto | null = null;
  recievedData: boolean = false;
  capturedImage: string | null = null;
  photoTaken: boolean = false;
  showAudioPlayer: boolean = false;

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private profileService: ProfileService, private httpService: HttpService, private photoService: PhotoService) { 

  }


  onImageCaptured(imageBase64: string) {
    this.capturedImage = `data:image/jpeg;base64,${imageBase64}`; 
    this.photoTaken = true;
    this.photoService.addPhoto(this.capturedImage);
    this.showAudioPlayer = false;
    this.sendImageToServer(imageBase64);
  }

  playAudio(description: string) {
    if (!description) {
      console.warn("⚠ No hay descripción para convertir en audio.");
      return;
    }

    this.httpService.generateAudio(description).subscribe(
      (blob: Blob) => {
        const audioUrl = URL.createObjectURL(blob);
        
        this.showAudioPlayer = true; // ✅ Asegurar que el reproductor se renderiza

        setTimeout(() => {
          if (!this.audioPlayer || !this.audioPlayer.nativeElement) {
            console.error("❌ No se encontró el <audio> en el DOM después del timeout.");
            return;
          }

          this.audioPlayer.nativeElement.src = audioUrl;
          this.audioPlayer.nativeElement.play()
            .then(() => console.log("🎶 Reproducción iniciada."))
            .catch(err => console.error("❌ Error al reproducir audio:", err));
        }, 300); // 🔹 Esperamos 300ms para asegurarnos de que Angular renderiza el <audio>
      },
      (error) => {
        console.error('❌ Error al generar el audio:', error);
      }
    );
  }


  sendImageToServer(imageBase64: string) {
    this.profileService.getProfile().subscribe(profileData => {
      this.httpService.searchImage(imageBase64, profileData).subscribe({
        next: (data: SearchImageResponseDto) => {
          console.log("✅ Respuesta del servidor:", JSON.stringify(data, null, 2));

          this.responseData = { 
            title: data.description?.titulo || 'Título desconocido',
            authors: data.description?.autor || 'Autor desconocido',
            year: data.description?.año || 'Año desconocido',
            description: data.description?.descripcion || 'Descripción no disponible'
          };

          this.recievedData = true;

          if (this.responseData.description) {
            this.playAudio(this.responseData.description);
          }
        },
        error: (err) => {
          console.error("❌ Error en la petición:", err.message);
        },
        complete: () => {
          console.log("✔ Petición completada.");
        }
      });
    });
  }
}
