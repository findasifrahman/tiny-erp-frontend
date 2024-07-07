
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
export class usersmodel {
  modelForms: FormGroup = this.formBuilder.group({
    username: ["",Validators.required],
    password: ["",Validators.required],
    roleid: ["",Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

} 