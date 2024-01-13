import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssignmentComponent } from './form-assignment.component';

describe('FormAssignmentComponent', () => {
  let component: FormAssignmentComponent;
  let fixture: ComponentFixture<FormAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAssignmentComponent]
    });
    fixture = TestBed.createComponent(FormAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
