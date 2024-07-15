
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import moment from 'moment';

export interface User {
  username: string;
  password: string;
}

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class assetsmodel {
  modelForms: FormGroup = this.formBuilder.group({
    assetname: ['', [Validators.required, Validators.maxLength(256)]],
    description: ['',  Validators.maxLength(256)],
    assetvalue: [0, [Validators.required, Validators.min(0)]],
    purchasedate: [moment().format('YYYY-MM-DD'), [Validators.required]],
    image: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*
assets: assetentryid Serial Primary key, maincompanyid int not null unchangeable, assetname varchar(256) not null, description not null TEXT, assetvalue not null INT,
purchasedate timestamp not null, image bytea, createdat (TIMESTAMP)
*/