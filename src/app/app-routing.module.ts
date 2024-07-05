import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddMainCompanyComponent  } from './components/mainCompany/add-main-company/add-main-company.component';
import { ListMainCompanyComponent } from './components/mainCompany/list-main-company/list-main-company.component';
import { EditMainCompanyComponent } from './components/mainCompany/edit-main-company/edit-main-company.component';

import { AddUsersComponent } from './components/users/add-users/add-users.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';

import { AddRolesComponent } from './components/roles/add-roles/add-roles.component';
import { EditRolesComponent } from './components/roles/edit-roles/edit-roles.component';
import { ListRolesComponent } from './components/roles/list-roles/list-roles.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from './components/sidebar/sidebar.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'change-password', component: ChangePasswordComponent},
  { path: '',component: SidebarComponent ,children:[
      { path: 'AddMainCompany', component: AddMainCompanyComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editMainCompany/:id', component: EditMainCompanyComponent, canActivate: [RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListMainCompany', component: ListMainCompanyComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },

      { path: 'AddRoles', component: AddRolesComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editRoles/:id', component: EditRolesComponent, canActivate: [RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListRoles', component: ListRolesComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },

      { path: 'AddUsers', component: AddUsersComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'editUsers/:id', component: EditUsersComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListUsers', component: ListUsersComponent, canActivate: [RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },

      { path: 'AddCustomer', component: AddCustomerComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editCustomer/:id', component: EditCustomerComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListCustomer', component: ListCustomerComponent, canActivate: [AuthGuard,RoleGuard], 
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
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
      
    }) 

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
