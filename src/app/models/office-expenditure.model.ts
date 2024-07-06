
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
export class officeexpendituretmodel {
  modelForms: FormGroup = this.formBuilder.group({
    officepurchaseitemlistid: [0, [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, Validators.min(0)]],
    unit: ['', [Validators.required, Validators.maxLength(15)]],
    quantity: [0, [Validators.required, Validators.min(0)]],
    totalamount: [0, [Validators.required, Validators.min(0)]],
    description: ['',  Validators.maxLength(256)]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
officeexpenditure: officeexpenditureid Serial primary key, maincompanyid int not null unchangeable, officepurchaseitemlistid INT not null, price INT null, unit not 
null varchar(15), quantity INT not null, totalamount INT NOT NULL, description text, createdat (TIMESTAMP)
*/