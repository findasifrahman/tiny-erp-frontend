
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
export class SalesOrdersmodel {
  modelForms: FormGroup = this.formBuilder.group({
    maincompanyid: ['', Validators.required],
    customerid: ['', Validators.required],
    customercompany: ['', [Validators.required, Validators.maxLength(256)]],
    salestype: ['direct', [Validators.required, Validators.maxLength(20)]],
    salesagent: ['', [Validators.required, Validators.maxLength(128)]],
    totalamount: [0, [Validators.required, Validators.min(0)]],
    status: ['', [Validators.required, Validators.maxLength(50)]],
    orderdate: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
maincompanyid int not null,customerid int not null, customercompany varchar(256) not null, 
# salestype varchar(20) not null, salesagent notnull varchar(128), totalamount float,
#status default pending not null varchar(50),orderdate timestamp_without_timezone, createdat timestamp without time zone
*/