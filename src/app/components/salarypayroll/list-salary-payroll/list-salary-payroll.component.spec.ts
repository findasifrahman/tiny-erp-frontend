import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalaryPayrollComponent } from './list-salary-payroll.component';

describe('ListSalaryPayrollComponent', () => {
  let component: ListSalaryPayrollComponent;
  let fixture: ComponentFixture<ListSalaryPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSalaryPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSalaryPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
