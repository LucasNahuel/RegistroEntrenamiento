import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTrainingDialogComponent } from './rating-training-dialog.component';

describe('RatingTrainingDialogComponent', () => {
  let component: RatingTrainingDialogComponent;
  let fixture: ComponentFixture<RatingTrainingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingTrainingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTrainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
