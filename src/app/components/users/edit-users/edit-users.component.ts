import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { usersmodel  } from '../../../models/user.model';
import { RolesService } from '../../../services/roles.service'
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent {
  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  id: number;
  roleName_arr: any = []
  maincompanyid = localStorage.getItem('maincompanyid');
  constructor(private service: UsersService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,private rolesService: RolesService,
    private models : usersmodel ) { }
  ngOnInit(): void {
    // Implement the initialization logic here
     this.form = this.models.modelForms;
     this.form.reset();

     this.rolesService.getAll(this.maincompanyid).subscribe({
      next: response => {
        for(let i=0; i<response.length; i++){
          this.roleName_arr.push(response[i]['rolename']);
        }
        this.route.params.subscribe(params => {
          this.id =  parseInt(params['id']);
          console.log("update id--" + params['id']);
          this.service.getbyid(this.id).subscribe({
            next: response => {
              console.log("data by id", response);
              this.form.patchValue(response);
            },
            error: error => {
              // handle login error
              console.log("error getting data", error);
            }
    
          });
    
        })
      },
      error: error => {
        // handle login error
        console.log("error getting data", error);
      }

    });
      

    
  }
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);
   

    if(formValue.maincompanyid != null){
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
