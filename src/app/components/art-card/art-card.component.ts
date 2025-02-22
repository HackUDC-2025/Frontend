import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss'],
  standalone:true,
})
export class ArtCardComponent  {

  @Input() title: string = 'Título de la Obra';
  @Input() year: string = 'Año';
  @Input() author: string = 'Autor Desconocido';
  @Input() description: string = 'Descripción breve de la obra de arte.';

}
