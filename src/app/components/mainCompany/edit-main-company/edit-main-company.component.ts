import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainCompanyService } from '../../../services/main-company.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { maincompanymodels  } from '../../../models/main-company.model';

@Component({
  selector: 'app-edit-main-company',
  templateUrl: './edit-main-company.component.html',
  styleUrl: './edit-main-company.component.scss'
})
export class EditMainCompanyComponent {
  id: number;
  spinner_value = 50;
  loading = false;
  mainCompanyForm!: FormGroup;
  constructor(private userService: MainCompanyService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,
    private Maincompanymodels : maincompanymodels  ) { }

  
  ngOnInit(): void {
    // Implement the initialization logic here
    this.mainCompanyForm = this.Maincompanymodels .modelForms;
    this.mainCompanyForm.reset();
    
    this.route.params.subscribe(params => {
      this.id =  parseInt(params['id']);
      console.log("update id--" + params['id']);
      this.userService.getbyid(this.id).subscribe({
        next: response => {
          console.log("data by id", response);
          this.mainCompanyForm.patchValue(response[0]);
        },
        error: error => {
          // handle login error
          console.log("error getting data", error);
        }

      });

    })
  }
  
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.mainCompanyForm.value;
    console.log(formValue);
    this.loading = true;

    await this.userService.update(this.id,formValue).subscribe({
      next: response => {
        // handle successful login
        console.log("update req successfull");
        this.snackBar.open('Data Updated Successfully', "Remove", {
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


    /**/
  }
}
