import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologBoxComponent } from './diolog-box.component';

describe('DiologBoxComponent', () => {
  let component: DiologBoxComponent;
  let fixture: ComponentFixture<DiologBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiologBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
