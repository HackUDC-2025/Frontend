import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  historySrc: string = 'assets/icon/button-history.svg';


  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private profileService: ProfileService, private httpService: HttpService, private photoService: PhotoService, private router: Router) { 
    this.updateLogo();
  }


  onImageCaptured(imageBase64: string) {
    this.capturedImage = `data:image/jpeg;base64,${imageBase64}`; 
    this.photoTaken = true;
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
        

        setTimeout(() => {
          if (!this.audioPlayer || !this.audioPlayer.nativeElement) {
            console.error("❌ No se encontró el <audio> en el DOM después del timeout.");
            return;
          }

          this.audioPlayer.nativeElement.src = audioUrl;
          this.audioPlayer.nativeElement.play()
            .then(() => console.log("🎶 Reproducción iniciada."))
            .catch(err => console.error("❌ Error al reproducir audio:", err));
        }, 300); 
      },
      (error) => {
        console.error('❌ Error al generar el audio:', error);
      }
    );
  }

  toggleAudioPlayer() {
  
    this.showAudioPlayer = true;
    this.playAudio(this.responseData?.description || '')
    
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
            description: data.description?.descripcion || 'Descripción no disponible',
            wikilink: data.wikipedia_url || '',
            pradolink: data.prado_url || ''
          };
          this.photoService.addPhoto(this.responseData.title,this.responseData.description);

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
  goToHistory() {
    this.router.navigate(['/history']);
  }


  @HostListener('window:DOMContentLoaded') 
  @HostListener('window:storage') 
  @HostListener('window:change') 
  updateLogo() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.historySrc = isDarkMode ? 'assets/icon/button-history-w.svg' : 'assets/icon/button-history.svg';
  }
  

}
