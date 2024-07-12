
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
export class SalesOrderDetailsmodel {
  modelForms: FormGroup = this.formBuilder.group({
    salesorderid: ['', Validators.required],
    productcategoryid: ['', Validators.required],
    productcategoryname: ['', [Validators.required, Validators.maxLength(256)]],
    productsubcategoryid: ['', Validators.required],
    productsubcategoryname: ['',  [Validators.required,Validators.maxLength(256)]],
    quantity: [0, [Validators.required, Validators.min(0)]],
    unit: ['kg', [Validators.required, Validators.maxLength(12)]],
    unitprice: [0, [Validators.required, Validators.min(0)]],
    totaldetailprice: [0, [Validators.required, Validators.min(0)]],
    description: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
salesorderdetails: (salesorderdetailid serial primary key, maincompanyid int not null unchangeable), salesorderid INT NOT NULL, productcategoryid INT NOT NULL, 
productcategoryname varchar(256) not null, productsubcategoryid INT not null, productsubcategoryname varchar(256) not null,  quantity INT NOT NULL, unit VARCHAR(12) not null, 
unitprice DECIMAL(10, 2) NOT NULL, totaldetailprice DECIMAL(10, 2) NOT NULL, description TEXT createdat TIMESTAMP
*/