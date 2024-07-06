
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
export class PurchaseCategorymodel {
  modelForms: FormGroup = this.formBuilder.group({
    itemname: ['', [Validators.required, Validators.maxLength(128)]],
    description: ['',  Validators.maxLength(256)]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
purchasecategory: purchasecategoryid primary key Serial, maincompanyid int not null unchangeable, itemname varchar(128) not null, description TEXT,createdat timestamp
*/