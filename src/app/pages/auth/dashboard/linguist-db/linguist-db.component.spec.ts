import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguistDbComponent } from './linguist-db.component';

describe('LinguistDbComponent', () => {
  let component: LinguistDbComponent;
  let fixture: ComponentFixture<LinguistDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinguistDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguistDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
