import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass, CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [IonicModule, CommonModule, NgClass, BackButtonComponent], 
  templateUrl: './typography.page.html',
  styleUrls: ['./typography.page.scss'],
})
export class TypographyPage {
  fonts = [
    { name: 'Inter Tight', class: 'font-body' },
    { name: 'Playfair Display', class: 'font-heading' },
  ];
}
