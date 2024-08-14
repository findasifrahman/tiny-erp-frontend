import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchasePaymentService } from '../../../services/purchase-payments.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { purchapaymentsmodel  } from '../../../models/purchase-payments.model';
import { EmployeeService } from '../../../services/employee.service';
import { SupplierService  } from '../../../services/supplier.service'
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-add-purchase-payment',
  templateUrl: './add-purchase-payment.component.html',
  styleUrl: './add-purchase-payment.component.scss'
})
export class AddPurchasePaymentComponent implements OnInit {
  employeeid_arr: any =[]
  employee_arr: any = []

  supplierid_arr: any = []
  supplier_arr: any =[]

  
  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: PurchasePaymentService,private snackBar: MatSnackBar,private dateAdapter: DateAdapter<Date>,
    private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService,
    private models : purchapaymentsmodel, private supplierService: SupplierService ) {
      this.dateAdapter.setLocale('en-GB');
     }

     ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();
      //this.form.get('customercompany').disable()
      this.employeeService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.employeeid_arr.push(posts[i]['employeeid']);
          this.employee_arr.push(posts[i]);
        }
        this.supplierService.getAll(this.maincompanyid).subscribe((posts1) => {
          for(let i=0;i<posts1.length;i++){
            this.supplierid_arr.push(posts1[i]['supplierid']);
            this.supplier_arr.push(posts1[i]);
          }
        })
      });  


  }

  //////////////
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);

    
    if(formValue.maincompanyid != null ){
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
            this.router.navigate(["/ListPurchasePayment"]);
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
