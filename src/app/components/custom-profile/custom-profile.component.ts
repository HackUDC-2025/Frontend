import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-profile',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './custom-profile.component.html',
  styleUrls: ['./custom-profile.component.scss'],
})
export class CustomProfileComponent  {
  description: string = '';

  @Output() close = new EventEmitter<void>();


  closeModal() {
    this.close.emit(); 
  }


  saveProfile() {
    console.log("Descripción guardada:", this.description);
    this.closeModal(); 
  }

}
