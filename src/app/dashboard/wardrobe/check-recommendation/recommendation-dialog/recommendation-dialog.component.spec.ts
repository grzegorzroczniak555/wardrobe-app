import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationDialogComponent } from './recommendation-dialog.component';

describe('RecommendationDialogComponent', () => {
  let component: RecommendationDialogComponent;
  let fixture: ComponentFixture<RecommendationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
