
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
export class purchaseordermodel {
  modelForms: FormGroup = this.formBuilder.group({
    supplierid: ['', Validators.required],
    totalamount: [0, [Validators.required, Validators.min(0)]],
    purchasedby: ['', [Validators.required, Validators.maxLength(128)]],
    date: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
purchaseorder: purchaseid serial Primary key, maincompanyid int not null unchangeable, supplierid not null INT, 
totalamount double not null, purchasedby not null varchar(128),date timestamp, createdat (TIMESTAMP)
*/