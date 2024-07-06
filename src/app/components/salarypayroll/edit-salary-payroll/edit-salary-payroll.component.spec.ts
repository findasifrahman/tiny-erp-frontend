import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryPayrollComponent } from './edit-salary-payroll.component';

describe('EditSalaryPayrollComponent', () => {
  let component: EditSalaryPayrollComponent;
  let fixture: ComponentFixture<EditSalaryPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSalaryPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSalaryPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
