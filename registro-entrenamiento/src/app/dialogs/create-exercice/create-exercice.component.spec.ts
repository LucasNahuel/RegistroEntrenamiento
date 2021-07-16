import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExerciceComponent } from './create-exercice.component';

describe('CreateExerciceComponent', () => {
  let component: CreateExerciceComponent;
  let fixture: ComponentFixture<CreateExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
