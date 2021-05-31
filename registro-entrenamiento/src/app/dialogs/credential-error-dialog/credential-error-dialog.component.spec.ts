import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialErrorDialogComponent } from './credential-error-dialog.component';

describe('CredentialErrorDialogComponent', () => {
  let component: CredentialErrorDialogComponent;
  let fixture: ComponentFixture<CredentialErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
