import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionFailedPageComponent } from './connection-failed-page.component';

describe('ConnectionFailedPageComponent', () => {
  let component: ConnectionFailedPageComponent;
  let fixture: ComponentFixture<ConnectionFailedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionFailedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
