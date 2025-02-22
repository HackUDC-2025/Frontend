export interface SearchImageResponseDto {
    art_class: string;
    description: {
      titulo  : string;
      autor: string;
      año: string;
      descripcion: string;
    }
    wikipedia_url: string;
    prado_url: string;

  }
  