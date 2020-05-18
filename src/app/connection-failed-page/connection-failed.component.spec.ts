import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionFailedComponent } from './connection-failed.component';

describe('ConnectionFailedPageComponent', () => {
  let component: ConnectionFailedComponent;
  let fixture: ComponentFixture<ConnectionFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
