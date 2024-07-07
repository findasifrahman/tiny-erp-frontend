import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductSubCategoryService } from '../../../services/product-sub-category.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductSubCategorymodel } from '../../../models/product-sub-category.model';
import { ProductCategoryService } from '../../../services/product-category.service'

@Component({
  selector: 'app-edit-product-sub-category',
  templateUrl: './edit-product-sub-category.component.html',
  styleUrl: './edit-product-sub-category.component.scss'
})
export class EditProductSubCategoryComponent {
  id: any
  productcategoryID_arr : any[] = [];
  productcategory_arr : any[] = [];
  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  maincompanyid = localStorage.getItem('maincompanyid');
  constructor(private service: ProductSubCategoryService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private productCategoryService: ProductCategoryService,
    private models : ProductSubCategorymodel ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();

    this.route.params.subscribe(params => {
      this.id =  parseInt(params['id']);
      this.service.getbyid(this.id).subscribe({
        next: response => {
          this.productCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
            for(let i=0;i<posts.length;i++){
              this.productcategoryID_arr.push(posts[i]['productcategoryid']);
              this.productcategory_arr.push(posts[i])
            }
          })

          this.form.patchValue(response);
        },
        error: error => {
          // handle login error
          console.log("error getting data", error);
        }

      });

    })

    
  }
  productcategoryIDChanged(event: any){
    console.log("this.selected--", event)
    this.productcategory_arr.map((item: any, index: any) => {
      if(item['productcategoryid'] == event){
        this.form.controls['categoryname'].setValue(item['categoryname']);
      }
    })
  }
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = await this.maincompanyid

    console.log(formValue);

    if(formValue.maincompanyid != null || formValue.categoryname != null || formValue.productcategoryid != null){
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
            this.router.navigate(["/ListProductSubCategory"]);
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
