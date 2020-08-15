import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationErrorDialogComponent } from './recommendation-error-dialog.component';

describe('RecommendationErrorDialogComponent', () => {
  let component: RecommendationErrorDialogComponent;
  let fixture: ComponentFixture<RecommendationErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
