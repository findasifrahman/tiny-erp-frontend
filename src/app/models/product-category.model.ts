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
export class ProductCategorymodel {
  modelForms: FormGroup = this.formBuilder.group({
    categoryname: ['', [Validators.required, Validators.maxLength(256)]]
  });

  constructor(private formBuilder: FormBuilder) {}

} 
/*productcategory: productcategoryid SERIAL PRIMARY KEY, maincompanyid int not null unchangeable, categoryname varchar(256) not null,  
# createdat (TIMESTAMP)
*/