import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  imports: [IonicModule,CommonModule]
})
export class CameraComponent{
  imageUrl: string | null = null;

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

      this.imageUrl = `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error("Error when taking photo:", error);
    }
  }
}
