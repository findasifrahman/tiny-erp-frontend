import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesOrdersDetailsService } from '../../../services/sales-order-details.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SalesOrderDetailsmodel  } from '../../../models/sales-order-details.model';
import moment from 'moment';
import { SalesOrdersService } from '../../../services/salesorders.service'
import { ProductCategoryService } from '../../../services/product-category.service'
import { ProductSubCategoryService } from '../../../services/product-sub-category.service'

@Component({
  selector: 'app-edit-sales-order-details',
  templateUrl: './edit-sales-order-details.component.html',
  styleUrl: './edit-sales-order-details.component.scss'
})
export class EditSalesOrderDetailsComponent {
  id: any;
  categoryName_arr = ["sales_agent","staff","admin"]
  roleName_arr = ["admin","sales","purchase","hr"]
  productcategoryid_arr : any[] = [];
  productcategory_arr : any[] = [];
  productsubcategoryid_arr: any[] = [];
  productsubcategory_arr: any[] = [];
  salesorderid_arr: any[] = [];
  unit_arr: any[] = ["kg","g","pcs","liter"];

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  maincompanyid = localStorage.getItem('maincompanyid');
  
  filteredSubCategories: any[] = [];
  constructor(private service: SalesOrdersDetailsService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private salesOrdersService:SalesOrdersService,private productCategoryService:ProductCategoryService,
    private productSubCategoryService:ProductSubCategoryService,
    private models : SalesOrderDetailsmodel ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();

    //////////////////////
        /////////////////////new
        // Watch for changes in the product category field
        this.form.get('productcategoryid')?.valueChanges.subscribe(categoryId => {
          this.onProductCategoryChange(categoryId);
        });
    
        // Watch for changes in the product subcategory field
        this.form.get('productsubcategoryid')?.valueChanges.subscribe(subCategoryId => {
          this.onProductSubCategoryChange(subCategoryId);
        });
    ///////////////////////////
    
    this.route.params.subscribe(params => {
      this.id =  parseInt(params['id']);
      console.log("update id--" + params['id']);
      this.service.getbyid(this.id).subscribe({
        next: response => {
          console.log("data by id", response);
          response["orderdate"] = moment(response['orderdate']).format("YYYY-MM-DD")
          this.form.patchValue(response);
          ///////////////////////////////////
          this.salesOrdersService.getAllbydate(this.maincompanyid, moment().subtract(7,'d').format('YYYY-MM-DD').toString()).subscribe((posts) => {
            console.log("salesorderid_arr", posts);
            this.salesorderid_arr = posts
            this.productCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
              for(let i=0;i<posts.length;i++){
                this.productcategoryid_arr.push(posts[i]['productcategoryid']);
                this.productcategory_arr.push(posts[i])
              }
              //console.log("employees", posts, this.salesagentid_arr);
            })
            this.productSubCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
              this.filteredSubCategories = posts
              for(let i=0;i<posts.length;i++){
                this.productsubcategoryid_arr.push(posts[i]['productsubcategoryid']);
                this.productsubcategory_arr.push(posts[i])
              }
              //console.log("employees", posts, this.salesagentid_arr);
            })
      
          });  
          ////////////////////////////////
        },
        error: error => {
          // handle login error
          console.log("error getting data", error);
        }

      });

    })
    //////////////////////////////

    
  }

    ///////////////////
    onProductCategoryChange(categoryId: any) {
      const selectedCategory = this.productcategory_arr.find(item => item.productcategoryid == categoryId);
      if (selectedCategory) {
        console.log("selectedCategory--", selectedCategory)
        this.form.controls['productcategoryname'].setValue(selectedCategory.categoryname);
        
      }
      //
      this.filteredSubCategories = this.productsubcategory_arr.filter(item => item.productcategoryid == categoryId);
      /*let temparr: any[] = []
      this.productsubcategory_arr.map((item: any, index: any) => {
        if(item['productsubcategoryid'] == categoryId){
          temparr.push(item['productsubcategoryid']);
        }
        if(index == this.productsubcategory_arr.length-1){
          console.log("temparr--", temparr)
          //this.productsubcategoryid_arr = temparr
          this.form.controls['productsubcategoryid'].setValue(temparr)
  
        }
      })*/
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //this.filteredSubCategories = this.productsubcategory_arr.filter(item => item.productcategoryid === categoryId);
      if (this.filteredSubCategories.length > 0) {
        this.form.controls['productsubcategoryid'].setValue(this.filteredSubCategories);//this.filteredSubCategories[0].productsubcategoryid);
      } else {
        this.form.controls['productsubcategoryid'].setValue(null);
        this.form.controls['productsubcategoryname'].setValue('');
        this.form.controls['price'].setValue('');
      }
    }
  
    onProductSubCategoryChange(subCategoryId: any) {
      const selectedSubCategory = this.filteredSubCategories.find(item => item.productsubcategoryid == subCategoryId);
      if (selectedSubCategory) {
        this.form.controls['productsubcategoryname'].setValue(selectedSubCategory.subcategoryname);
        this.form.controls['unitprice'].setValue(selectedSubCategory.price);
      }
    }

  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid;

    console.log(formValue);

    if(formValue.maincompanyid != null || formValue.salesorderid != null || formValue.productcategoryid != null || formValue.productsubcategoryid != null ){
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
            this.router.navigate(["/ListSalesOrderDetails"]);
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
