
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
export class PaymentSalesmodel {
  modelForms: FormGroup = this.formBuilder.group({
    customerid: ['', Validators.required],
    customercompany: ['', [Validators.maxLength(256)]],
    paymentdate: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
    recievedbyid: ['', [Validators.required]],
    receivedby: ['', [Validators.maxLength(256)]],
    salesorderid: [''],
    description: ['']
    
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
paymentsales: paymentid SERIAL PRIMARY KEY, maincompanyid int not null unchangeable, customerid INT NOT NULL,customercompany varchar(256), paymentdate DATE NOT NULL, 
amount DECIMAL(10, 2) NOT NULL,recievedbyid INT not null, receivedby varchar(256), createdat TIMESTAMP , salesorderid int, description text
*/