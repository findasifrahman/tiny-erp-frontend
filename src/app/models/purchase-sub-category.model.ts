
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
export class PurchaseSubCategorymodel {
  modelForms: FormGroup = this.formBuilder.group({
    purchasecategoryid: ['', Validators.required],
    categoryname: ['', [Validators.required, Validators.maxLength(128)]],
    subcategoryname: ['',  Validators.maxLength(256)],
    price: [0, [Validators.required, Validators.min(0)]],
    description: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
purchasesubcategory: purchasesubcategoryid primary key serial, maincompanyid int not null unchangeable, purchasecategoryid INT not null,categoryname varchar(128),
 subcategoryname varchar(256) not null, price (double not null),description Text, createdat (TIMESTAMP)
*/