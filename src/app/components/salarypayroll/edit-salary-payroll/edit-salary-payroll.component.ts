import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryPayrollService } from '../../../services/salary-payroll.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { salarypayrollmodel  } from '../../../models/salary-payroll.model';
import { EmployeeService } from '../../../services/employee.service';
import moment from 'moment';
@Component({
  selector: 'app-edit-salary-payroll',
  templateUrl: './edit-salary-payroll.component.html',
  styleUrl: './edit-salary-payroll.component.scss'
})
export class EditSalaryPayrollComponent implements OnInit {
  id: any;
  employeeid_arr: any =[]
  employee_arr: any = []
  
  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: SalaryPayrollService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService,
    private models : salarypayrollmodel ) { }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();
      ////////////////////////
      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        console.log("update id--" + params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            console.log("data by id", response);
            response["date"] = moment(response['date']).format("YYYY-MM-DD")
            this.form.patchValue(response);
            ///////////////////////////////////
            this.employeeService.getAll(this.maincompanyid).subscribe((posts) => {
              console.log("emp posts-",posts);
              for(let i=0;i<posts.length;i++){
                this.employeeid_arr.push(posts[i]['employeeid']);
                this.employee_arr.push(posts[i]);
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
      /////////////////////////////

  }
  employeeidChanged(event: any){
    console.log("this.selected--", event)
    this.employee_arr.map((item: any, index: any) => {
      if(item['employeeid'] == event){
        this.form.controls['employeename'].setValue(item['employeename']);
        this.form.controls['salary'].setValue(item['salary']);
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
            this.snackBar.open('Data Added Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });
            this.loading = false;
            this.router.navigate(["/ListSalaryPayroll"]);
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
