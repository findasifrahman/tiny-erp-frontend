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
    localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'superadmin' }));
    this.router.navigate(['/AddMainCompany']);
    //
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: response => {
          // handle successful login
        },
        error: error => {
          // handle login error
        }
      });
    }
  }
  changePassword(): void {
    this.router.navigate(['/change-password']);
  }
}

