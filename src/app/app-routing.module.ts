import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddMainCompanyComponent  } from './components/add-main-company/add-main-company.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'AddMainCompany', component: AddMainCompanyComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  /*
  { path: 'ListMainCompany', component: MainCompanyListComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'AddUsers', component: AddUsersComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'ListUsers', component: UserListComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'AddRoles', component: AddRolesComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'ListRoles', component: RolesListComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  */
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
