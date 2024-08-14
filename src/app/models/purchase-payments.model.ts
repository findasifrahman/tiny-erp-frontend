
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
export class purchapaymentsmodel {
  modelForms: FormGroup = this.formBuilder.group({
    supplierid: [Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
    recievedby: ['', [Validators.required, Validators.maxLength(128)]],
    paymentorderid:[],
    paymentdate: ['', Validators.required],
    description:['']
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*

purchasepayment: purchasepaymentid int not null,maincompanyid int not null,amount not null int, supplierid not null int,
paymentorderid int, paymentdate date not null, recievedby int not null, description text ,createdat timestamp  


*/