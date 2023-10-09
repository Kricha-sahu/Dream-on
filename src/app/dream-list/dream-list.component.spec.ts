import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamListComponent } from './dream-list.component';

describe('DreamListComponent', () => {
  let component: DreamListComponent;
  let fixture: ComponentFixture<DreamListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreamListComponent]
    });
    fixture = TestBed.createComponent(DreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
