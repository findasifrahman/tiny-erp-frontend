import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../services/supplier.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { suppliermodel  } from '../../../models/supplier.model';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrl: './edit-supplier.component.scss'
})
export class EditSupplierComponent {
  id: any;
  purchasecategoryid_arr: any =[]
  purchasecategory_arr: any = []

  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: SupplierService,private snackBar: MatSnackBar, 
    private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute,
    private models : suppliermodel ) { }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();

      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            this.form.patchValue(response);
          },
          error: error => {
            // handle login error
            console.log("error getting data", error);
          }
  
        });
  
      })
  }


  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);

    
    if(formValue.maincompanyid != null || formValue.suppliercompany != undefined || formValue.suppliercontactname != null){
      this.loading = true;
        await this.service.update(this.id,formValue).subscribe({
          next: response => {
            // handle successful login
            console.log("post req successfull");
            this.snackBar.open('Data Added Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });
            this.loading = false;
            this.router.navigate(["/ListSupplier"]);
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
