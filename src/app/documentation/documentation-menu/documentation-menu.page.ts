import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';

@Component({
  selector: 'app-documentation-menu',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, BackButtonComponent], 
  templateUrl: './documentation-menu.page.html',
  styleUrls: ['./documentation-menu.page.scss'],
})
export class DocumentationMenuPage {}
