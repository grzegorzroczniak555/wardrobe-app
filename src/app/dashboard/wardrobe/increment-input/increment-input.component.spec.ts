import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementInputComponent } from './increment-input.component';

describe('IncrementInputComponent', () => {
  let component: IncrementInputComponent;
  let fixture: ComponentFixture<IncrementInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
