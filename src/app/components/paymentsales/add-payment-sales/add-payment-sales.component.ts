import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentSalesService } from '../../../services/payment-sales.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PaymentSalesmodel  } from '../../../models/payment-sales.model';
import { CustomerService } from '../../../services/customer.service'
import { EmployeeService } from '../../../services/employee.service';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-add-payment-sales',
  templateUrl: './add-payment-sales.component.html',
  styleUrl: './add-payment-sales.component.scss'
})
export class AddPaymentSalesComponent implements OnInit{
  customerID_arr: any[] = [];
  customerCompany_arr: any[] = [];
  recievedbyid_arr: any[] = [];
  recievedby_arr: any[] = [];

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  maincompanyid = localStorage.getItem('maincompanyid');
  constructor(private service: PaymentSalesService,private snackBar: MatSnackBar,private dateAdapter: DateAdapter<Date>,
    private formBuilder: FormBuilder, private router: Router,private customerService: CustomerService, private employeeService: EmployeeService,
    private models : PaymentSalesmodel ) { 
      this.dateAdapter.setLocale('en-GB');
    }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();
    
    this.customerService.getAll(this.maincompanyid).subscribe((posts) => {
      for(let i=0;i<posts.length;i++){
        this.customerID_arr.push(posts[i]['customerid']);
        this.customerCompany_arr.push(posts[i]);
      }
      this.employeeService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.recievedbyid_arr.push(posts[i]['employeeid']);
          this.recievedby_arr.push(posts[i])
        }
      })
      console.log(posts);
    });  
  }

  customerIDChanged(event: any){
    console.log("this.selected--", event)
    this.customerCompany_arr.map((item: any, index: any) => {
      if(item['customerid'] == event){
        this.form.controls['customercompany'].setValue(item['customercompany']);
      }
    })
  }
  recievedbyidChanged(event: any){
    console.log("this.selected--", event)
    this.recievedby_arr.map((item: any, index: any) => {
      if(item['employeeid'] == event){
        this.form.controls['receivedby'].setValue(item['employeename']);
      }
    })
  }

  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid;

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
            this.router.navigate(["/ListPaymentSales"]);
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
