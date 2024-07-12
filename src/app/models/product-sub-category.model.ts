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
export class ProductSubCategorymodel {
  modelForms: FormGroup = this.formBuilder.group({
    productcategoryid: ['', Validators.required],
    categoryname: ['', [Validators.maxLength(256)]],
    subcategoryname: ['', [Validators.required, Validators.maxLength(256)]],
    price: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
#productsubcategory: productsubcategoryid SERIAL PRIMARY KEY, maincompanyid int not null unchangeable, productcategoryid int not null,
# categoryname varchar(256) not null, price Double NOT NULL,
#subcategoryname varchar(256) not null,  createdat (TIMESTAMP)
*/