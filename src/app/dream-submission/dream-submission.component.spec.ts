import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamSubmissionComponent } from './dream-submission.component';

describe('DreamSubmissionComponent', () => {
  let component: DreamSubmissionComponent;
  let fixture: ComponentFixture<DreamSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreamSubmissionComponent]
    });
    fixture = TestBed.createComponent(DreamSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
