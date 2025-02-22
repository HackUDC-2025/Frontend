import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CameraComponent } from '../components/camera/camera.component';
import { Router } from '@angular/router';
import { ProfileService } from '../store/profile/profile.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,CameraComponent],
})
export class HomePage {
  constructor( private router: Router, private profileService: ProfileService) {}
  goToCamera(profiles: string) {
    const valor = profiles;
    this.profileService.setProfile(valor);
    this.router.navigate(['/open-camera']);
  }
}
