import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.page.html',
  styleUrls: ['./color-palette.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ColorPalettePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
