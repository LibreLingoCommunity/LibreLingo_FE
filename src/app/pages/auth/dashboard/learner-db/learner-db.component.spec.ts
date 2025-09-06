import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerDbComponent } from './learner-db.component';

describe('LearnerDbComponent', () => {
  let component: LearnerDbComponent;
  let fixture: ComponentFixture<LearnerDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnerDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
