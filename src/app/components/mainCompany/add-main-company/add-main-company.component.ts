import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainCompanyService } from '../../../services/main-company.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { maincompanymodels  } from '../../../models/main-company.models';
@Component({
  selector: 'app-add-main-company',
  templateUrl: './add-main-company.component.html',
  styleUrl: './add-main-company.component.scss'
})
export class AddMainCompanyComponent implements OnInit{
  spinner_value = 50;
  loading = false;
  mainCompanyForm!: FormGroup;
  constructor(private userService: MainCompanyService,private snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private router: Router,
    private Maincompanymodels : maincompanymodels  ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.mainCompanyForm = this.Maincompanymodels .modelForms;
    this.mainCompanyForm.reset();
    
  }
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.mainCompanyForm.value;
    console.log(formValue);
    this.loading = true;

    await this.userService.Add(formValue).subscribe({
      next: response => {
        // handle successful login
        console.log("post req successfull");
        this.snackBar.open('Data Added Successfully', "Remove", {
          duration: 6000,
          verticalPosition: 'top',
          panelClass: ['blue-snackbar']
        });
        this.loading = false;
        this.router.navigate(["/ListMainCompany"]);
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


    /*try {
      await this.userService.Add(formValue).subscribe(
        data => {
          console.log("post req successfull");
          this.snackBar.open('Data Added Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
          this.loading = false;
          this.router.navigate(["/ListMainCompany"]);
        },
        error => {
          console.log("error post", error);
          this.snackBar.open('Unsuccessfull', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
          });
          this.loading = false;
        }
      );

    }
    catch (err) {
    }*/
  }


}
