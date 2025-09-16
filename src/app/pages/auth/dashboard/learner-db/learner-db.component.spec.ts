import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerDashboardComponent } from './learner-db.component';

describe('LearnerDbComponent', () => {
  let component: LearnerDashboardComponent;
  let fixture: ComponentFixture<LearnerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnerDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
