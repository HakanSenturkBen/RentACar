import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordImputComponent } from './password-imput.component';

describe('PasswordImputComponent', () => {
  let component: PasswordImputComponent;
  let fixture: ComponentFixture<PasswordImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordImputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
