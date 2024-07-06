
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
export class suppliermodel {
  modelForms: FormGroup = this.formBuilder.group({
    suppliercompany: ['', [Validators.required, Validators.maxLength(256)]],
    suppliercontactname: ['', [Validators.required, Validators.maxLength(128)]],
    suppliercontactnumber: ['', [Validators.required, Validators.maxLength(30)]],
    supplieraddress: ['', [Validators.required, Validators.maxLength(56)]],
    description: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
supplier: supplierid PRIMARY KEY serial, maincompanyid int not null unchangeable, suppliercompany varchar(256) not null, suppliercontactname varchar(128) not null, 
suppliercontactnumber varchar(30) not null, supplieraddress not null varchar(56),description text, createdat (TIMESTAMP)
*/