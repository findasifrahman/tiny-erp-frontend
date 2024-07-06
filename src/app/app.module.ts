import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient,HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { employeemodel } from './models/employee.model';
import { SalesOrdersmodel } from './models/sales-orders.model';
import { ProductCategorymodel } from './models/product-category.model';
import { ProductSubCategorymodel } from './models/product-sub-category.model';
import { SalesOrderDetailsmodel } from './models/sales-order-details.model';
import { PaymentSalesmodel } from './models/payment-sales.model';
import { PurchaseCategorymodel } from './models/purchase-category.model';
import { PurchaseSubCategorymodel } from './models/purchase-sub-category.model';
import { suppliermodel } from './models/supplier.model';
import { purchaseordermodel } from './models/purchase-order.model';
import { purchaseorderdetailsmodel } from './models/purchase-order-details.models';
import { salarypayrollmodel } from './models/salary-payroll.model';
import { officepurchaseitemlistmodel } from './models/office-purchase-itemlist.model';
import { officeexpendituretmodel } from './models/office-expenditure.model';
import { assetsmodel } from './models/assets.model';

//components

import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';

import { AddSalesOrderComponent } from './components/salesorder/add-sales-order/add-sales-order.component';
import { EditSalesOrderComponent } from './components/salesorder/edit-sales-order/edit-sales-order.component';
import { ListSalesOrderComponent } from './components/salesorder/list-sales-order/list-sales-order.component';

import { AddProductCategoryComponent } from './components/productcategory/add-product-category/add-product-category.component';
import { EditProductCategoryComponent } from './components/productcategory/edit-product-category/edit-product-category.component';
import { ListProductCategoryComponent } from './components/productcategory/list-product-category/list-product-category.component';
import { AddProductSubCategoryComponent } from './components/productsubcategory/add-product-sub-category/add-product-sub-category.component';
import { EditProductSubCategoryComponent } from './components/productsubcategory/edit-product-sub-category/edit-product-sub-category.component';
import { ListProductSubCategoryComponent } from './components/productsubcategory/list-product-sub-category/list-product-sub-category.component';
import { AddSalesOrderDetailsComponent } from './components/salesorderdetails/add-sales-order-details/add-sales-order-details.component';
import { EditSalesOrderDetailsComponent } from './components/salesorderdetails/edit-sales-order-details/edit-sales-order-details.component';
import { ListSalesOrderDetailsComponent } from './components/salesorderdetails/list-sales-order-details/list-sales-order-details.component';
import { AddPaymentSalesComponent } from './components/paymentsales/add-payment-sales/add-payment-sales.component';
import { EditPaymentSalesComponent } from './components/paymentsales/edit-payment-sales/edit-payment-sales.component';
import { ListPaymentSalesComponent } from './components/paymentsales/list-payment-sales/list-payment-sales.component';
import { AddPurchaseCategoryComponent } from './components/purchasecategory/add-purchase-category/add-purchase-category.component';
import { EditPurchaseCategoryComponent } from './components/purchasecategory/edit-purchase-category/edit-purchase-category.component';
import { ListPurchaseCategoryComponent } from './components/purchasecategory/list-purchase-category/list-purchase-category.component';
import { AddPurchaseSubCategoryComponent } from './components/purchasesubcategory/add-purchase-sub-category/add-purchase-sub-category.component';
import { EditPurchaseSubCategoryComponent } from './components/purchasesubcategory/edit-purchase-sub-category/edit-purchase-sub-category.component';
import { ListPurchaseSubCategoryComponent } from './components/purchasesubcategory/list-purchase-sub-category/list-purchase-sub-category.component';
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './components/supplier/edit-supplier/edit-supplier.component';
import { ListSupplierComponent } from './components/supplier/list-supplier/list-supplier.component';
import { AddPurchaseOrderComponent } from './components/purchaseorder/add-purchase-order/add-purchase-order.component';
import { EditPurchaseOrderComponent } from './components/purchaseorder/edit-purchase-order/edit-purchase-order.component';
import { ListPurchaseOrderComponent } from './components/purchaseorder/list-purchase-order/list-purchase-order.component';
import { AddPurchaseOrderDetailsComponent } from './components/purchaseorderdetails/add-purchase-order-details/add-purchase-order-details.component';
import { EditPurchaseOrderDetailsComponent } from './components/purchaseorderdetails/edit-purchase-order-details/edit-purchase-order-details.component';
import { ListPurchaseOrderDetailsComponent } from './components/purchaseorderdetails/list-purchase-order-details/list-purchase-order-details.component';
import { AddSalaryPayrollComponent } from './components/salarypayroll/add-salary-payroll/add-salary-payroll.component';
import { EditSalaryPayrollComponent } from './components/salarypayroll/edit-salary-payroll/edit-salary-payroll.component';
import { ListSalaryPayrollComponent } from './components/salarypayroll/list-salary-payroll/list-salary-payroll.component';
import { AddOfficePurchaseItemListComponent } from './components/officepurchaseitemlist/add-office-purchase-item-list/add-office-purchase-item-list.component';
import { EditOfficePurchaseItemListComponent } from './components/officepurchaseitemlist/edit-office-purchase-item-list/edit-office-purchase-item-list.component';
import { ListOfficePurchaseItemListComponent } from './components/officepurchaseitemlist/list-office-purchase-item-list/list-office-purchase-item-list.component';
import { AddOfficeExpenditureComponent } from './components/officeexpenditure/add-office-expenditure/add-office-expenditure.component';
import { EditOfficeExpenditureComponent } from './components/officeexpenditure/edit-office-expenditure/edit-office-expenditure.component';
import { ListOfficeExpenditureComponent } from './components/officeexpenditure/list-office-expenditure/list-office-expenditure.component';
import { AddAssetsComponent } from './components/assets/add-assets/add-assets.component';
import { EditAssetsComponent } from './components/assets/edit-assets/edit-assets.component';
import { ListAssetsComponent } from './components/assets/list-assets/list-assets.component';

/////////////////////// others
import { ConfirmationdialogComponent } from './components/commoncomponents/confirmationdialog/confirmationdialog.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';



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
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    AddSalesOrderComponent,
    EditSalesOrderComponent,
    ListSalesOrderComponent,
    AddProductCategoryComponent,
    EditProductCategoryComponent,
    ListProductCategoryComponent,
    AddProductSubCategoryComponent,
    EditProductSubCategoryComponent,
    ListProductSubCategoryComponent,
    AddSalesOrderDetailsComponent,
    EditSalesOrderDetailsComponent,
    ListSalesOrderDetailsComponent,
    AddPaymentSalesComponent,
    EditPaymentSalesComponent,
    ListPaymentSalesComponent,
    AddPurchaseCategoryComponent,
    EditPurchaseCategoryComponent,
    ListPurchaseCategoryComponent,
    AddPurchaseSubCategoryComponent,
    EditPurchaseSubCategoryComponent,
    ListPurchaseSubCategoryComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ListSupplierComponent,
    AddPurchaseOrderComponent,
    EditPurchaseOrderComponent,
    ListPurchaseOrderComponent,
    AddPurchaseOrderDetailsComponent,
    EditPurchaseOrderDetailsComponent,
    ListPurchaseOrderDetailsComponent,
    AddSalaryPayrollComponent,
    EditSalaryPayrollComponent,
    ListSalaryPayrollComponent,
    AddOfficePurchaseItemListComponent,
    EditOfficePurchaseItemListComponent,
    ListOfficePurchaseItemListComponent,
    AddOfficeExpenditureComponent,
    EditOfficeExpenditureComponent,
    ListOfficeExpenditureComponent,
    AddAssetsComponent,
    EditAssetsComponent,
    ListAssetsComponent,

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
    customermodel,
    employeemodel,
    SalesOrdersmodel,
    ProductCategorymodel,
    ProductSubCategorymodel,
    SalesOrderDetailsmodel,
    PaymentSalesmodel,
    PurchaseCategorymodel,
    PurchaseSubCategorymodel,
    suppliermodel,
    purchaseordermodel,
    purchaseorderdetailsmodel,
    salarypayrollmodel,
    officepurchaseitemlistmodel,
    officeexpendituretmodel,
    assetsmodel,
    
    HttpClientModule
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    AuthGuard,RoleGuard,
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
