import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // TEST CODE: Remove this code and implement the login logic
    const sample_tpken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzE5OTkzNDI2LCJleHAiOjE3MjAwMjk0MjYsImlzcyI6IjEwMy4yMTguMjUuOTY6ODA4NiJ9.t_KzgGm6NakWlVyhQ4R0Ikfrxvaqzr4xvH3K3A9tUSQ'
    //localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'superadmin' }));
    localStorage.setItem("jwt", sample_tpken);
    this.router.navigate(['/AddMainCompany']);
    //
    /*if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: response => {
          // handle successful login
        },
        error: error => {
          // handle login error
        }
      });
    }*/
  }
  changePassword(): void {
    this.router.navigate(['/change-password']);
  }
}

