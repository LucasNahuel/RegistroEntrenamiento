import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameErrorDialogComponent } from './username-error-dialog.component';

describe('UsernameErrorDialogComponent', () => {
  let component: UsernameErrorDialogComponent;
  let fixture: ComponentFixture<UsernameErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
