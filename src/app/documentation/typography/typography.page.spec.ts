import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyPage } from './typography.page';

describe('TypographyPage', () => {
  let component: TypographyPage;
  let fixture: ComponentFixture<TypographyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
