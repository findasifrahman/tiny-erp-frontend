import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesOrdersService } from '../../../services/salesorders.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SalesOrdersmodel  } from '../../../models/sales-orders.model';
import { CustomerService } from '../../../services/customer.service'
import { EmployeeService } from '../../../services/employee.service';
import moment from 'moment';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-edit-sales-order',
  templateUrl: './edit-sales-order.component.html',
  styleUrl: './edit-sales-order.component.scss'
})
export class EditSalesOrderComponent {
  id: any;
  customerID_arr: any =[]
  customerCompany_arr: any = []
  salestype_arr: any =  ["Direct","Agent"]
  salesagent_arr: any[] = []
  salesagentid_arr: number[] =[]
  status_arr: any = ["Pending","Completed"]
  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: SalesOrdersService,private snackBar: MatSnackBar,private route:ActivatedRoute,private dateAdapter: DateAdapter<Date>,
    private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService, private employeeService: EmployeeService,
    private models : SalesOrdersmodel ) { 
      this.dateAdapter.setLocale('en-GB');
    }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();

      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        console.log("update id--" + params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            console.log("data by id", response);
            response["orderdate"] = moment(response['orderdate']).format("YYYY-MM-DD")
            this.form.patchValue(response);
            ///////////////////////////////////
            this.customerService.getAll(this.maincompanyid).subscribe((posts) => {
              for(let i=0;i<posts.length;i++){
                this.customerID_arr.push(posts[i]['customerid']);
                this.customerCompany_arr.push(posts[i]);
              }
              this.employeeService.getAll(this.maincompanyid).subscribe((posts) => {
                for(let i=0;i<posts.length;i++){
                  this.salesagentid_arr.push(posts[i]['employeeid']);
                  this.salesagent_arr.push(posts[i])
                }
                console.log("employees", posts, this.salesagentid_arr);
              })
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
  customerIDChanged(event: any){
    console.log("this.selected--", event)
    this.customerCompany_arr.map((item: any, index: any) => {
      if(item['customerid'] == event){
        this.form.controls['customercompany'].setValue(item['customercompany']);
      }
    })
  }
  salesAgentIDChanged(event: any){
    console.log("this.selected--", event)
    this.salesagent_arr.map((item: any, index: any) => {
      if(item['employeeid'] == event){
        this.form.controls['salesagent'].setValue(item['employeename']);
      }
    })
  }

  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);

    
    if(formValue.maincompanyid != null || formValue.maincompanyid != undefined || formValue.employeeid != null 
      || formValue.employeeid != undefined || formValue.customerid != null || formValue.customerid != undefined){
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
            this.router.navigate(["/ListSalesOrder"]);
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
