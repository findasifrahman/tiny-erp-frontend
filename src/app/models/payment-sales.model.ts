
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
    paymentdate: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
    receivedby: ['', [Validators.required, Validators.maxLength(256)]]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
paymentsales: paymentid SERIAL PRIMARY KEY, maincompanyid int not null unchangeable, custometid INT NOT NULL, paymentdate DATE NOT NULL, 
amount DECIMAL(10, 2) NOT NULL,receivedby varchar(256) not null, createdat TIMESTAMP
*/