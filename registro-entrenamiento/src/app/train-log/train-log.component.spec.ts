import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLogComponent } from './train-log.component';

describe('TrainLogComponent', () => {
  let component: TrainLogComponent;
  let fixture: ComponentFixture<TrainLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
