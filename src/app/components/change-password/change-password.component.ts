import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ConfirmationdialogComponent } from '../commoncomponents/confirmationdialog/confirmationdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  loading = false;
  spinner_value = 100;
  constructor(private fb: FormBuilder, private authService: AuthService,public _router: Router,public dialog: MatDialog,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      username: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
        width: '450px',
        hasBackdrop: true,
        data: "Are you sure you want to Change the password?"
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.loading = true;
          this.authService.changePassword(this.changePasswordForm.value).subscribe(response => {
            this.snackBar.open('Password Changed Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });
            this.loading = false;
            this._router.navigate(['/']);
            // handle successful password change
          }, error => {
            // handle password change error
            this.snackBar.open('Credentials Dont Exist ' + error.error.messsage, "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
            this.loading = false;
            console.log("error post", error);
    
          });
          //////////////////////////////
  
        }//if end
      })//dialog ref
      //////////////////////////////////




    }
  }

  /////////
  cancel(): void {
    this._router.navigate(['/login']);
  }
}
