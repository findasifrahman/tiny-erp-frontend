

import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface MainCompany {
    MainCompanyID: number;
    CompanyName: string;
    Date_created: string;
    logo: string;
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class maincompanymodels {
  modelForms: FormGroup = this.formBuilder.group({
    MainCompanyID: ["", Validators.required],
    CompanyName:["", Validators.required],
    Date_created: ["", Validators.required],
    logo: [""]
  });

  constructor(private formBuilder: FormBuilder) {}

}