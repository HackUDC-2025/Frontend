import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass, CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
  imports: [IonicModule, CommonModule, NgClass, BackButtonComponent]
})
export class AboutUsPage {
  constructor() {}


}
