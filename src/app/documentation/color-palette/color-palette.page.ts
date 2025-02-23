import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.page.html',
  styleUrls: ['./color-palette.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, BackButtonComponent]
})
export class ColorPalettePage  {

  colors = [
    { name: 'Museo Negro', hex: '#1C1C1C' },
    { name: 'Museo Gris', hex: '#3A3A3A' },
    { name: 'Museo Beige', hex: '#E3D5B8' },
    { name: 'Museo Blanco', hex: '#FAF8F1' },
    
    { name: 'Museo Oro', hex: '#C9A227' },
    { name: 'Museo Terracota', hex: '#A35D2B' },
    { name: 'Museo Oliva', hex: '#6C7A89' },
    
    { name: 'Museo Azul', hex: '#4A6FA5' },
    { name: 'Museo Vino', hex: '#77212E' },
    
    { name: 'Museo Fondo Claro', hex: '#F6F3EB' },
    { name: 'Museo Fondo Oscuro', hex: '#2e2e2e' }
  ];

}
