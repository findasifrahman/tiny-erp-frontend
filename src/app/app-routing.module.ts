import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddMainCompanyComponent  } from './components/add-main-company/add-main-company.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { SidebarComponent } from './components/sidebar/sidebar.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '',component: SidebarComponent ,children:[
      { path: 'admin/AddMainCompany', component: AddMainCompanyComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
    ]
  },
  /*
  { path: 'ListMainCompany', component: MainCompanyListComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'AddUsers', component: AddUsersComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'ListUsers', component: UserListComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'AddRoles', component: AddRolesComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  { path: 'ListRoles', component: RolesListComponent, canActivate: [AuthGuard], data: { role: 'superadmin' } },
  */
  // other routes...
];
export function mytokenGetter() {
  //return this.logservice.getUserLogStatus();
  return localStorage.getItem('jwt');
}
@NgModule({
  imports: [RouterModule.forRoot(routes),
    JwtModule.forRoot({/* automatically assign bearer token with every http request service*/
      config: {
        tokenGetter: mytokenGetter,
      }
    }) 

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
