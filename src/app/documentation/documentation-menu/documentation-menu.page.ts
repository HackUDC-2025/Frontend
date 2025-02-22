import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-documentation-menu',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], 
  templateUrl: './documentation-menu.page.html',
  styleUrls: ['./documentation-menu.page.scss'],
})
export class DocumentationMenuPage {}
