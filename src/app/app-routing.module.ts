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
      ///////////////////////////Main Company///////////////////////////
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
      ///////////////////////////Roles///////////////////////////
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
      ///////////////////////////Users///////////////////////////
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
      ///////////////////////////Customer///////////////////////////
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
      ///////////////////////////Employee///////////////////////////
      { path: 'AddEmployee', component: AddEmployeeComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editEmployee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListEmployee', component: ListEmployeeComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Sales Order///////////////////////////
      { path: 'AddSalesOrder', component: AddSalesOrderComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editSalesOrder/:id', component: EditSalesOrderComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListSalesOrder', component: ListSalesOrderComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },

      ///////////////////////////Product Category///////////////////////////
      { path: 'AddProductCategory', component: AddProductCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editProductCategory/:id', component: EditProductCategoryComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListProductCategory', component: ListProductCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Product Sub Category///////////////////////////
      { path: 'AddProductSubCategory', component: AddProductSubCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editProductSubCategory/:id', component: EditProductSubCategoryComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListProductSubCategory', component: ListProductSubCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Sales Order Details///////////////////////////
      { path: 'AddSalesOrderDetails', component: AddSalesOrderDetailsComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editSalesOrderDetails/:id', component: EditSalesOrderDetailsComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListSalesOrderDetails', component: ListSalesOrderDetailsComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Payment Sales///////////////////////////
      { path: 'AddPaymentSales', component: AddPaymentSalesComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editPaymentSales/:id', component: EditPaymentSalesComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListPaymentSales', component: ListPaymentSalesComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Purchase Category///////////////////////////
      { path: 'AddPurchaseCategory', component: AddPurchaseCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editPurchaseCategory/:id', component: EditPurchaseCategoryComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListPurchaseCategory', component: ListPurchaseCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Purchase Sub Category///////////////////////////
      { path: 'AddPurchaseSubCategory', component: AddPurchaseSubCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editPurchaseSubCategory/:id', component: EditPurchaseSubCategoryComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListPurchaseSubCategory', component: ListPurchaseSubCategoryComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },

      ///////////////////////////Supplier///////////////////////////
      { path: 'AddSupplier', component: AddSupplierComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editSupplier/:id', component: EditSupplierComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListSupplier', component: ListSupplierComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Purchase Order///////////////////////////
      { path: 'AddPurchaseOrder', component: AddPurchaseOrderComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editPurchaseOrder/:id', component: EditPurchaseOrderComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListPurchaseOrder', component: ListPurchaseOrderComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Purchase Order Details///////////////////////////
      { path: 'AddPurchaseOrderDetails', component: AddPurchaseOrderDetailsComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editPurchaseOrderDetails/:id', component: EditPurchaseOrderDetailsComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListPurchaseOrderDetails', component: ListPurchaseOrderDetailsComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Salary Payroll///////////////////////////
      { path: 'AddSalaryPayroll', component: AddSalaryPayrollComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editSalaryPayroll/:id', component: EditSalaryPayrollComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListSalaryPayroll', component: ListSalaryPayrollComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Office Purchase Item List///////////////////////////
      { path: 'AddOfficePurchaseItemList', component: AddOfficePurchaseItemListComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editOfficePurchaseItemList/:id', component: EditOfficePurchaseItemListComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListOfficePurchaseItemList', component: ListOfficePurchaseItemListComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Office Expenditure///////////////////////////
      { path: 'AddOfficeExpenditure', component: AddOfficeExpenditureComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editOfficeExpenditure/:id', component: EditOfficeExpenditureComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListOfficeExpenditure', component: ListOfficeExpenditureComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      ///////////////////////////Assets///////////////////////////
      { path: 'AddAssets', component: AddAssetsComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
      { 
        path: 'editAssets/:id', component: EditAssetsComponent, canActivate: [AuthGuard,RoleGuard],
        data: {
          expectedRole: ['superadmin']
        }
      },
      { path: 'ListAssets', component: ListAssetsComponent, canActivate: [AuthGuard,RoleGuard], 
        data: {
          expectedRole: ['superadmin']
        }
      },
    ]
  },

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
