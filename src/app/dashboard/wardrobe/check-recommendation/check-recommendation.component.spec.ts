import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRecommendationComponent } from './check-recommendation.component';

describe('CheckRecommendationComponent', () => {
  let component: CheckRecommendationComponent;
  let fixture: ComponentFixture<CheckRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
