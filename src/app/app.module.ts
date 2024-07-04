import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


//////////material modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
/////////////////////////////////////////////////////////////////////////////////////////
import { AddUsersComponent } from './components/users/add-users/add-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AddMainCompanyComponent } from './components/mainCompany/add-main-company/add-main-company.component';
import { EditMainCompanyComponent } from './components/mainCompany/edit-main-company/edit-main-company.component';
import { ListMainCompanyComponent } from './components/mainCompany/list-main-company/list-main-company.component';

import { AddRolesComponent } from './components/roles/add-roles/add-roles.component';
import { EditRolesComponent } from './components/roles/edit-roles/edit-roles.component';
import { ListRolesComponent } from './components/roles/list-roles/list-roles.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';

/////////////////////// Models
import { maincompanymodels } from './models/main-company.model';
import { rolesmodels } from './models/roles.model';
import { usersmodel } from './models/user.model';
import { customermodel } from './models/customers.model';
/////////////////////// others
import { ConfirmationdialogComponent } from './components/commoncomponents/confirmationdialog/confirmationdialog.component';




///////////////
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    SidebarComponent,
    AddUsersComponent,
    EditUsersComponent,
    ListUsersComponent,
    AddMainCompanyComponent,
    EditMainCompanyComponent,
    ListMainCompanyComponent,
    ConfirmationdialogComponent,
    AddRolesComponent,
    EditRolesComponent,
    ListRolesComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatPaginatorModule,
    MatSortModule,
    MatRippleModule,
    MatNativeDateModule,
    MatBadgeModule,
    // models
    maincompanymodels,
    rolesmodels,
    usersmodel,
    customermodel
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
