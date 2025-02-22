import { Component, HostListener } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CameraComponent } from '../components/camera/camera.component';
import { Router } from '@angular/router';
import { ProfileService } from '../store/profile/profile.service';
import { CustomProfileComponent } from '../components/custom-profile/custom-profile.component';
import { CommonModule } from '@angular/common';
import { ProfileConfig } from '../profiles/profile.interface';
import { ProfileFactory } from '../profiles/profile.factory';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,CameraComponent, CustomProfileComponent, CommonModule],
})
export class HomePage {
  showCustomProfile: boolean= false;

  logoSrc: string = 'assets/icon/logo.svg';

  constructor( private router: Router, private profileService: ProfileService) {

    this.updateLogo();
  }

  goToCamera(profileKey: string) {
    const selectedProfile = ProfileFactory.getProfile(profileKey);
    this.profileService.setProfile(selectedProfile);
    this.router.navigate(['/open-camera']);
  }

  toggleCustomProfile(){
    this.showCustomProfile = !this.showCustomProfile;
  }

  goToDocumentation() {
    this.router.navigate(['/documentation']);
  }

  @HostListener('window:DOMContentLoaded') 
  @HostListener('window:storage') 
  @HostListener('window:change') 
  updateLogo() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.logoSrc = isDarkMode ? 'assets/icon/logo-blanco.svg' : 'assets/icon/logo.svg';
  }

}
