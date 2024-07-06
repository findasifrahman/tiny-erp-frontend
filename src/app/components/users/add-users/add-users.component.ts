import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { usersmodel  } from '../../../models/user.model';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss'
})
export class AddUsersComponent {
  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: UsersService,private snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private router: Router,
    private models : usersmodel ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    this.form.reset();
    
  }
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = localStorage.getItem('maincompanyid');

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
            this.router.navigate(["/ListUsers"]);
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