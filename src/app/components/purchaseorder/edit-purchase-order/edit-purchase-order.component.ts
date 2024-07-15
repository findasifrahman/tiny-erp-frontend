import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrderService } from '../../../services/purchase-order.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { purchaseordermodel  } from '../../../models/purchase-order.model';
import { SupplierService } from '../../../services/supplier.service';
import moment from 'moment';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-edit-purchase-order',
  templateUrl: './edit-purchase-order.component.html',
  styleUrl: './edit-purchase-order.component.scss'
})
export class EditPurchaseOrderComponent implements OnInit{
  id: any;
  supplierid_arr: any =[]
  supplier_arr: any = []

  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  supplierCompany: any;
  status_hidden = true;
  constructor(private service: PurchaseOrderService,private snackBar: MatSnackBar, private supplierService: SupplierService,
    private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute,private dateAdapter: DateAdapter<Date>,
    private models : purchaseordermodel ) { 
      this.dateAdapter.setLocale('en-GB');
    }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();
      

      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            console.log("data by id", response);
            response["date"] = moment(response['date']).format("YYYY-MM-DD")
            this.form.patchValue(response);
            ///////////////////////////////////
            this.supplierService.getAll(this.maincompanyid).subscribe((posts) => {
              for(let i=0;i<posts.length;i++){
                this.supplierid_arr.push(posts[i]['supplierid']);
                this.supplier_arr.push(posts[i]);
              }
              console.log(posts);
            });  
            ///////////////////////////////////////
          },
          error: error => {
            // handle login error
            console.log("error getting data", error);
          }
  
        });
  
      })

  }
  supplieridChanged(event: any){
    console.log("this.selected--", event)
    this.supplier_arr.map((item: any, index: any) => {
      if(item['supplierid'] == event){
        this.supplierCompany = item['suppliercompany']
        this.status_hidden = false;
      }
    })
  }


  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);

    
    if(formValue.maincompanyid != null ){
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
            this.router.navigate(["/ListPurchaseOrder"]);
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
