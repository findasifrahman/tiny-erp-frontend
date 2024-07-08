import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseSubCategoryService } from '../../../services/purchase-sub-category.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PurchaseSubCategorymodel  } from '../../../models/purchase-sub-category.model';
import { PurchaseCategoryService } from '../../../services/purchase-category.service'

@Component({
  selector: 'app-edit-purchase-sub-category',
  templateUrl: './edit-purchase-sub-category.component.html',
  styleUrl: './edit-purchase-sub-category.component.scss'
})
export class EditPurchaseSubCategoryComponent {
  id: any;
  purchasecategoryid_arr: any =[]
  purchasecategory_arr: any = []

  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: PurchaseSubCategoryService,private snackBar: MatSnackBar, private purchaseCategoryService: PurchaseCategoryService,
    private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute,
    private models : PurchaseSubCategorymodel ) { }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();
      
      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            this.form.patchValue(response);
            ///////////////////////////////////
            this.purchaseCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
              for(let i=0;i<posts.length;i++){
                this.purchasecategoryid_arr.push(posts[i]['purchasecategoryid']);
                this.purchasecategory_arr.push(posts[i]);
              }
            });  
            ///////////////////////////////////////
          },
          error: error => {
            // handle login error
            console.log("error getting data", error);
          }
  
        });
  
      })
      ///////////////////////////////////
  }
  purchasecategoryidChanged(event: any){
    console.log("this.selected--", event)
    this.purchasecategory_arr.map((item: any, index: any) => {
      if(item['purchasecategoryid'] == event){
        this.form.controls['categoryname'].setValue(item['itemname']);
      }
    })
  }


  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);

    
    if(formValue.maincompanyid != null || formValue.maincompanyid != undefined || formValue.subcategoryname != null){
      this.loading = true;
        await this.service.update(this.id,formValue).subscribe({
          next: response => {
            // handle successful login
            console.log("post req successfull");
            this.snackBar.open('Data Updated Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });
            this.loading = false;
            this.router.navigate(["/ListPurchaseSubCategory"]);
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
