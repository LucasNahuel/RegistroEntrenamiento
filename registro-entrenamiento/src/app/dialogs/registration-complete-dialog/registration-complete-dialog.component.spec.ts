import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCompleteDialogComponent } from './registration-complete-dialog.component';

describe('RegistrationCompleteDialogComponent', () => {
  let component: RegistrationCompleteDialogComponent;
  let fixture: ComponentFixture<RegistrationCompleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationCompleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
