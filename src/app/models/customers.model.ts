
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
export class customermodel {
  modelForms: FormGroup = this.formBuilder.group({
    maincompanyid: ["",Validators.required],
    customercompany: ["",Validators.required],
    companycontactperson: ["",Validators.required],
    contactnumber1: ["",Validators.required],
    contactnumber2: [""],
    address: ["",Validators.required],
    olddue: [""],
    createdat: [""],

  });

  constructor(private formBuilder: FormBuilder) {}

} 