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
export class ProductStockmodel {
  modelForms: FormGroup = this.formBuilder.group({
    productcategoryid: ['', [Validators.required]],
    productsubcategoryid: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    unit: ['', [Validators.required, Validators.maxLength(15)]],
    entrydate: ['', [Validators.required]],
    status: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', [Validators.maxLength(256)]],
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
productstock: productstockid int primary key, maincompanyid int not null unchangeable, productcategoryid int not null,
    productsubcategoryid int not null, quantity not null Int, unit not null varchar(15),entrydate timestamp, 
    status not null varchar(100),description text, 
    createdat (TIMESTAMP)
*/