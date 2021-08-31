import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManeeshaComponent } from './maneesha.component';

describe('ManeeshaComponent', () => {
  let component: ManeeshaComponent;
  let fixture: ComponentFixture<ManeeshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManeeshaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManeeshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
