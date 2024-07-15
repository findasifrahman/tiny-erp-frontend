import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductStockService } from '../../../services/product-stock.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductStockmodel  } from '../../../models/product-stock.model';
import moment from 'moment';
import { ProductCategoryService } from '../../../services/product-category.service'
import { ProductSubCategoryService } from '../../../services/product-sub-category.service'
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-add-product-stock',
  templateUrl: './add-product-stock.component.html',
  styleUrl: './add-product-stock.component.scss'
})
export class AddProductStockComponent implements OnInit{

  status_arr : any[] = ["produced","shipped","delivered","cancelled"];

  productcategoryid_arr : any[] = [];
  productcategory_arr : any[] = [];

  productsubcategoryid_arr: any[] = [];
  productsubcategory_arr: any[] = [];


  unit_arr: any[] = ["kg","g","pcs","liter"];
  productCatName = ""
  productSubCatName = ""
  productCatShow = false;
  productSubCatShow = false;

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  maincompanyid = localStorage.getItem('maincompanyid');
  constructor(private service: ProductStockService,private snackBar: MatSnackBar,private dateAdapter: DateAdapter<Date>,
    private formBuilder: FormBuilder, private router: Router, private productCategoryService:ProductCategoryService,
    private productSubCategoryService:ProductSubCategoryService,
    private models : ProductStockmodel ) { 
      this.dateAdapter.setLocale('en-GB');
    }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();


      this.productCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.productcategoryid_arr.push(posts[i]['productcategoryid']);
          this.productcategory_arr.push(posts[i])
        }
        //console.log("employees", posts, this.salesagentid_arr);
      })
      this.productSubCategoryService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.productsubcategoryid_arr.push(posts[i]['productsubcategoryid']);
          this.productsubcategory_arr.push(posts[i])
        }
        //console.log("employees", posts, this.salesagentid_arr);
      })


    
  }
  productcategoryidChanged(event: any){

    this.productcategory_arr.map((item: any, index: any) => {
      console.log("this.selected--", item['productcategoryid'], event)
      if(item['productcategoryid'] == event){
        this.productCatName = item['categoryname'];
        this.productCatShow = true;
      }
    })
  }
  productsubcategoryidChanged(event: any){
    console.log("this.selected--", event)
    this.productsubcategory_arr.map((item: any, index: any) => {
      if(item['productsubcategoryid'] == event){
        this.productSubCatName = item['subcategoryname'];
        this.productSubCatShow = true;
      }
    })
  }

  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid;

    console.log(formValue);

    if(formValue.maincompanyid != null  ){
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
            this.router.navigate(["/ListStock"]);
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
