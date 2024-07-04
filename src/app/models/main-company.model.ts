

import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface MainCompany {
    maincompanyid: number;
    companyname: string;
    datecreated: string;
    logo: string;
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class maincompanymodels {
  modelForms: FormGroup = this.formBuilder.group({
    companyname:["", Validators.required],
    datecreated: [""],
    logo: [""],
    other: [""]
  });

  constructor(private formBuilder: FormBuilder) {}

}