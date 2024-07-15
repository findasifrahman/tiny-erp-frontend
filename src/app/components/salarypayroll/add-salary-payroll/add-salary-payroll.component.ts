import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryPayrollService } from '../../../services/salary-payroll.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { salarypayrollmodel  } from '../../../models/salary-payroll.model';
import { EmployeeService } from '../../../services/employee.service';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-add-salary-payroll',
  templateUrl: './add-salary-payroll.component.html',
  styleUrl: './add-salary-payroll.component.scss'
})
export class AddSalaryPayrollComponent implements OnInit {
  employeeid_arr: any =[]
  employee_arr: any = []
  
  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: SalaryPayrollService,private snackBar: MatSnackBar,private dateAdapter: DateAdapter<Date>,
    private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService,
    private models : salarypayrollmodel ) {
      this.dateAdapter.setLocale('en-GB');
     }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();
      //this.form.get('customercompany').disable()
      this.employeeService.getAll(this.maincompanyid).subscribe((posts) => {
        console.log("emp posts-",posts);
        for(let i=0;i<posts.length;i++){
          this.employeeid_arr.push(posts[i]['employeeid']);
          this.employee_arr.push(posts[i]);
        }
      });  
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
