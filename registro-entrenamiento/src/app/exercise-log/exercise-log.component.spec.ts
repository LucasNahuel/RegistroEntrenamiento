import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseLogComponent } from './exercise-log.component';

describe('ExerciseLogComponent', () => {
  let component: ExerciseLogComponent;
  let fixture: ComponentFixture<ExerciseLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
