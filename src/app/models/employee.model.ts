
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface Employee {
  username: string;
  password: string;
}

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class employeemodel {
  modelForms: FormGroup = this.formBuilder.group({
    joiningdate: ['', Validators.required],
    employeename: ['', [Validators.required, Validators.maxLength(128)]],
    age: ['', [Validators.required, Validators.min(0)]],
    contactno: ['', [Validators.required, Validators.maxLength(30)]],
    address: ['', [Validators.required, Validators.maxLength(256)]],
    nidnumber: [''],
    salary: ['', Validators.required],
    grade: ['', Validators.maxLength(10)],
    roleid: ['', [Validators.maxLength(20),Validators.required]],
    state: ['', Validators.maxLength(20)],
    description: [''],
    image: [''] // Assuming handling of bytea as string for form control

  });

  constructor(private formBuilder: FormBuilder) {}

} 
//employyeid serial primary key, 