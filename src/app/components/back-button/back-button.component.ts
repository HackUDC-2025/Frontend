import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  standalone: true,
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {
  backIcon: string = 'assets/icon/button-back-w.svg'; 
  constructor(private location: Location) {
    this.updateIcon();
  }

  goBack() {
    this.location.back(); 
  }
  @HostListener('window:DOMContentLoaded') 
  @HostListener('window:storage') 
  @HostListener('window:change') 
  updateIcon() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.backIcon = isDarkMode ? 'assets/icon/button-back-w.svg' : 'assets/icon/button-back.svg';
  }
}
