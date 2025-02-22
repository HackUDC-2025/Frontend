import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TitleParserDto } from 'src/app/dtos/title-parse.dto';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ArtCardComponent implements OnChanges {

  @Input() description: TitleParserDto | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['description'] && changes['description'].currentValue) {
      console.log("📌 Datos actualizados en el hijo:", this.description);
    }
  }
}
