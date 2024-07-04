

import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface roles {
    roleid: number;
    maincompanyid: string;
    rolename: string;
    rolepriviledge: string;
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class rolesmodels {
  modelForms: FormGroup = this.formBuilder.group({
    maincompanyid: ["",Validators.required],
    rolename: ["",Validators.required],
    rolepriviledge: ["",Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

}