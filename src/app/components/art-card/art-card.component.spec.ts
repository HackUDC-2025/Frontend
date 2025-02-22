import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtCardComponent } from './art-card.component';

describe('ArtCardComponent', () => {
  let component: ArtCardComponent;
  let fixture: ComponentFixture<ArtCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArtCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
