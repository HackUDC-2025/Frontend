import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPalettePage } from './color-palette.page';

describe('ColorPalettePage', () => {
  let component: ColorPalettePage;
  let fixture: ComponentFixture<ColorPalettePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
