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

@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.page.html',
  styleUrls: ['./open-camera.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,FormsModule, CameraComponent, ArtCardComponent]
})
export class OpenCameraPage {

  profile$: Observable<string | null>;
  text = "";

  constructor(private profileService: ProfileService) {
    this.profile$ = this.profileService.getProfile();
    console.log(this.profile$)
  }

  async speak() {
    if (this.text.trim() === '') return;

    await TextToSpeech.speak({
      text: this.text,
      lang: 'es-ES',
      rate: 0.8, 
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient', 
    });
  }

}
