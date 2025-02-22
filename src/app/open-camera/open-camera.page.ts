import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CameraComponent } from '../components/camera/camera.component';
import { ProfileService } from '../store/profile/profile.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.page.html',
  styleUrls: ['./open-camera.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CameraComponent]
})
export class OpenCameraPage implements OnInit {

  profile$: Observable<string | null>;

  constructor(private profileService: ProfileService) {
    this.profile$ = this.profileService.getProfile();
    console.log(this.profile$)
  }

  ngOnInit() {
  }

}
