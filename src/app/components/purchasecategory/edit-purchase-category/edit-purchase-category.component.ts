import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseCategoryService } from '../../../services/purchase-category.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PurchaseCategorymodel  } from '../../../models/purchase-category.model';

@Component({
  selector: 'app-edit-purchase-category',
  templateUrl: './edit-purchase-category.component.html',
  styleUrl: './edit-purchase-category.component.scss'
})
export class EditPurchaseCategoryComponent {
  id: any
  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: PurchaseCategoryService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,
    private models : PurchaseCategorymodel ) { }
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
    formValue['maincompanyid'] = await localStorage.getItem('maincompanyid');

    console.log(formValue);

    if(formValue.maincompanyid != null){
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
            this.router.navigate(["/ListPurchaseCategory"]);
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
