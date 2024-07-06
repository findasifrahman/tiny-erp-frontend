
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
export class officepurchaseitemlistmodel {
  modelForms: FormGroup = this.formBuilder.group({
    itemname: ['', [Validators.required, Validators.maxLength(256)]],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['',  Validators.maxLength(256)]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
officeipurchasetemlist: officepurchaseitemlistid SERIAL PRIMARY KEY, maincompanyid int not null unchangeable, itemname varchar(256) not null, price INT not null, description TEXT,  
createdat TIMESTAMP
*/