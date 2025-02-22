import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentationMenuPage } from './documentation-menu.page';

describe('DocumentationMenuPage', () => {
  let component: DocumentationMenuPage;
  let fixture: ComponentFixture<DocumentationMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
