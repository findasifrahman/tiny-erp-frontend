
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
export class purchaseorderdetailsmodel {
  modelForms: FormGroup = this.formBuilder.group({
    purchaseid: ['', Validators.required],
    purchasecategoryid: ['', Validators.required],
    categoryname: ['', [Validators.required, Validators.maxLength(256)]],
    purchasesubcategoryid: ['', Validators.required],
    subcategoryname: ['', [Validators.required, Validators.maxLength(256)]],
    purchaseamount: [0, [Validators.required, Validators.min(0)]],
    purchasequantity: [0, [Validators.required, Validators.min(0)]],
    unit: ['', [Validators.required, Validators.maxLength(15)]],
    totalamount: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
purchaseorderdetails: purchasedetailid serial primary key, maincompanyid int not null unchangeable, purchaseid INT NOT NULL, purchasecategoryid INT not null, 
categoryname varchar(256) not null, purchasesubcategoryid INT not null, subcategoryname varchar(256) not null, purchaseamount int not null, purchasequantity int not null,  
unit varchar(15) NOT NULL ,totalamount numeric not null, createdat (TIMESTAMP)
*/