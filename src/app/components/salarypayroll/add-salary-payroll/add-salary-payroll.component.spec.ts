import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryPayrollComponent } from './add-salary-payroll.component';

describe('AddSalaryPayrollComponent', () => {
  let component: AddSalaryPayrollComponent;
  let fixture: ComponentFixture<AddSalaryPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSalaryPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalaryPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
