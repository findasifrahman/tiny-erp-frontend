import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { customermodel  } from '../../../models/customers.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {
  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: CustomerService,private snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private router: Router,
    private models : customermodel ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();
    
  }
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = localStorage.getItem('maincompanyid');

    console.log(formValue);
   

    if(formValue.maincompanyid != null){
      this.loading = true;
        await this.service.Add(formValue).subscribe({
          next: response => {
            // handle successful login
            console.log("post req successfull");
            this.snackBar.open('Data Added Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });
            this.loading = false;
            this.router.navigate(["/ListCustomer"]);
          },
          error: error => {
            // handle login error
            console.log("error post", error);
            this.snackBar.open('Unsuccessfull', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
            this.loading = false;
          }
        });
    }
    else{
      this.snackBar.open('Please set Main Company ID', "Remove", {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });

    }

    /**/
  }
}
