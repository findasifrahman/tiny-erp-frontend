
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface User {
  username: string;
  password: string;
}

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class salarypayrollmodel {
  modelForms: FormGroup = this.formBuilder.group({
    employeeid: ['', Validators.required],
    employeename: ['', [Validators.required, Validators.maxLength(128)]],
    date: ['', Validators.required],
    salary: [0, [Validators.required, Validators.min(0)]],
    deduction: [0, [Validators.required, Validators.min(0)]],
    bonus: [0, [Validators.required, Validators.min(0)]],
    leavetaken: [0, [Validators.required, Validators.min(0)]],
    finalsalarypaid: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
salarypayroll: payrollid serial not null,  maincompanyid int not null unchangeable, employeeid INT not null, employeename varchar(128) not null, date TimeStamp nut null, 
salary INT not null, deduction NOT NULL default 0 INT, bonus NOT NULL DEFAULT 0 
INT, leavetaken not null default 0, finalsalarypaid INT not NULL, createdat (TIMESTAMP)
*/