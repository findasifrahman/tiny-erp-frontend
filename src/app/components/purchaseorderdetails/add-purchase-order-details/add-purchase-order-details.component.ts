import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrderDetailService } from '../../../services/purchase-order-detail.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { purchaseorderdetailsmodel  } from '../../../models/purchase-order-details.models';
import moment from 'moment';
import { PurchaseOrderService } from '../../../services/purchase-order.service'
import { PurchaseCategoryService } from '../../../services/purchase-category.service'
import { PurchaseSubCategoryService } from '../../../services/purchase-sub-category.service'

@Component({
  selector: 'app-add-purchase-order-details',
  templateUrl: './add-purchase-order-details.component.html',
  styleUrl: './add-purchase-order-details.component.scss'
})
export class AddPurchaseOrderDetailsComponent implements OnInit {
  purchaseid_arr : any[] = [];
  
  purchasecategoryid_arr: any[] = [];
  purchasecategory_arr: any[] = [];

  purchasesubcategoryid_arr: any[] = [];
  purchasesubcategory_arr: any[] = [];

  unit_arr: any[] = ["kg","g","pcs","liter"];

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  maincompanyid = localStorage.getItem('maincompanyid');
  constructor(private service: PurchaseOrderDetailService,private snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private router: Router, private purchaseOrderService:PurchaseOrderService,private purchaseCategoryService:PurchaseCategoryService,
    private purchaseSubCategoryService:PurchaseSubCategoryService,
    private models : purchaseorderdetailsmodel ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();

    this.purchaseOrderService.getAllbydate(this.maincompanyid, moment().subtract(7,'d').format('YYYY-MM-DD').toString()).subscribe((posts) => {
      console.log("purchaseid arr_arr", posts);
      this.purchaseid_arr = posts
      this.purchaseCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.purchasecategoryid_arr.push(posts[i]['purchasecategoryid']);
          this.purchasecategory_arr.push(posts[i])
        }
        //console.log("employees", posts, this.salesagentid_arr);
      })
      this.purchaseSubCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.purchasesubcategoryid_arr.push(posts[i]['purchasesubcategoryid']);
          this.purchasesubcategory_arr.push(posts[i])
        }
        //console.log("employees", posts, this.salesagentid_arr);
      })

    });  
    
  }
  purchasecategoryidChanged(event: any){

    this.purchasecategory_arr.map((item: any, index: any) => {
      if(item['purchasecategoryid'] == event){
        this.form.controls['categoryname'].setValue(item['itemname']);
      }
    })
  }
  purchasesubcategoryidChanged(event: any){
    console.log("this.selected--", event)
    this.purchasesubcategory_arr.map((item: any, index: any) => {
      if(item['purchasesubcategoryid'] == event){
        this.form.controls['subcategoryname'].setValue(item['subcategoryname']);
        this.form.controls['purchaseamount'].setValue(item['price']);
      }
    })
  }

  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid;

    console.log(formValue);

    if(formValue.maincompanyid != null || formValue.purchaseid != null || formValue.purchasecategoryid != null || formValue.purchasesubcategoryid != null ){
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
            this.router.navigate(["/ListPurchaseOrderDetails"]);
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
