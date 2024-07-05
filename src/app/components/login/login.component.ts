import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  spinner_value = 50;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // TEST CODE: Remove this code and implement the login logic
    //const sample_tpken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjAyMzc0OTcsImlhdCI6MTcyMDE1MTA5NywidXNlciI6ImFzaWYiLCJyb2xlIjoic3VwZXJhZG1pbiJ9.MXdYLonilkTzOPB09XhTu_mhsmW-DBU1Ll7tbE0HqOU'//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYXNpZiIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzIwMDg1MjMyLCJleHAiOjE3MjAxMjEyMzIsImlzcyI6IjEwMy4yMTguMjUuOTY6ODA4NiJ9.HK0EBiE5ybPPMc7b42I9lbNNtp_2J-jHdi5lNwhjpjk'
    //localStorage.setItem('maincompanyid', "2");
    //localStorage.setItem("jwt", sample_tpken);
    //console.log('get user logged in -----------',this.authService.getUserLogStatus(), this.authService.getrole());
    //this.router.navigate(['/AddMainCompany']);
    //
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: response => {
          // handle successful login
          let token = (<any>response).token;
          console.log(token);
          localStorage.setItem("jwt", token);
          let role = this.authService.getrolefromtoken(token)
          console.log(role);
          this.loading = false;
          this.router.navigate(['/AddMainCompany']);
        },
        error: error => {
          // handle login error
          this.snackBar.open(error,"Undo",{
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
          });
          this.loading = false;
        }
      });
    }
  }
  changePassword(): void {
    this.router.navigate(['/change-password']);
  }
}

