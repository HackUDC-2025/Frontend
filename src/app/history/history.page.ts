import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';
import { photoDto } from '../dtos/photo.dto';
import { BackButtonComponent } from '../components/back-button/back-button.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, BackButtonComponent]
})
export class HistoryPage implements OnInit {
  photos: photoDto[] = [];

  constructor(private photoService: PhotoService) {
    
  }

  ngOnInit() {
    this.photoService.photos$.subscribe(data => {
      this.photos = data;
    });
  }


  clearHistory() {
    this.photoService.clearPhotos();
  }

}
