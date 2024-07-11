

import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';

interface MenuNode {
  name: string;
  link?: string;
  visible: boolean;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Company',
    visible: true,
    children: [
      { name: 'Add Main Company', link: '/AddMainCompany', visible: true},
      { name: 'Main Company List', link: '/ListMainCompany', visible: true}
    ]
  },
  {
    name: 'Users',
    visible: true,
    children: [
      { name: 'Add Users', link: '/AddUsers', visible: true},
      { name: 'User List', link: '/ListUsers',   visible: true}
    ]
  },
  {
    name: 'Roles',
    visible: true,
    children: [
      { name: 'Add Roles', link: '/AddRoles', visible: true},
      { name: 'Roles List', link: '/ListRoles', visible: true}
    ]
  },
  {
    name: 'Sales',
    visible: true,
    children: [
      {
        name: 'Customer',
        visible: true,
        children: [
          { name: 'Add Customer', link: '/AddCustomer',  visible: true},
          { name: 'Customer List', link: '/ListCustomer', visible: true}
        ]
      },
      {
        name: 'New Sales',
        visible: true,
        children: [
          {
            name: 'Sales Order',
            visible: true,
            children: [
              { name: 'Add Sales Orders', link: '/AddSalesOrder',   visible: true},
              { name: 'Sales Order List', link: '/ListSalesOrder', visible: true}
            ]
          },
          {
            name: 'Order Details',
            visible: true,
            children: [
              { name: 'Add Order Details', link: '/AddSalesOrderDetails',  visible: true},
              { name: 'Order Details list', link: '/ListSalesOrderDetails',  visible: true}
            ]
          }
        ]
      },
      {
        name: 'Payment Voucher',
        visible: true,
        children: [
          { name: 'Add Payment Voucher', link: '/AddPaymentSales',   visible: true},
          { name: 'Payment Voucher list', link: '/ListPaymentSales',  visible: true}
        ]
      }
    ]
  },
  {
    name: 'Purchase Production',
    visible: true,
    children: [
      {
        name: 'Purchase Category',
        visible: true,
        children: [
          { name: 'Add Purchase Category', link: '/AddPurchaseCategory',  visible: true},
          { name: 'Purchase Category List', link: '/ListPurchaseCategory', visible: true}
        ]
      },
      {
        name: 'Purchase Sub Category',
        visible: true,
        children: [
          { name: 'Add Purchase Sub Category', link: '/AddPurchaseSubCategory',  visible: true},
          { name: 'Purchase Sub Category List', link: '/ListPurchaseSubCategory', visible: true}
        ]
      },
      {
        name: 'Supplier',
        visible: true,
        children: [
          { name: 'Add Supplier', link: '/AddSupplier',  visible: true},
          { name: 'Supplier List', link: '/ListSupplier', visible: true}
        ]
      },
      {
        name: 'Purchase Order',
        visible: true,
        children: [
          { name: 'Add Puchase Order', link: '/AddPurchaseOrder',  visible: true},
          { name: 'Purchase Order List', link: '/ListPurchaseOrder', visible: true}
        ]
      },
      {
        name: 'Purchase Order Details',
        visible: true,
        children: [
          { name: 'Add Puchase Order Details', link: '/AddPurchaseOrderDetails',  visible: true},
          { name: 'Purchase Order Detail List', link: '/ListPurchaseOrderDetails', visible: true}
        ]
      },
    ]
  },
  {
    name: 'HR',
    visible: true,
    children: [
      {
        name: 'Employee Biodata',
        visible: true,
        children: [
          { name: 'Add Employee Biodata', link: '/AddEmployee',  visible: true},
          { name: 'Employee Biodata List', link: '/ListEmployee', visible: true}
        ]
      },
      {
        name: 'Salary Payroll',
        visible: true,
        children: [
          { name: 'Add Payroll', link: '/AddSalaryPayroll',  visible: true},
          { name: 'Payroll List', link: '/ListSalaryPayroll', visible: true}
        ]
      },
      {
        name: 'Office expenditure products',
        visible: true,
        children: [
          { name: 'Add expenditure products', link: '/AddOfficePurchaseItemList',  visible: true},
          { name: 'expenditure products List', link: '/ListOfficePurchaseItemList', visible: true}
        ]
      },
      {
        name: 'Office expenditure',
        visible: true,
        children: [
          { name: 'Add Office Expenditure', link: '/AddOfficeExpenditure',  visible: true},
          { name: 'Office Expenditure List', link: '/ListOfficeExpenditure', visible: true}
        ]
      },
    ]
  },
  {
    name: 'Inventory',
    visible: true,
    children: [
      {
        name: 'Product Category',
        visible: true,
        children: [
          { name: 'Add Product Category', link: '/AddProductCategory',  visible: true},
          { name: 'Product Category List', link: '/ListProductCategory', visible: true}
        ]
      },
      {
        name: 'Product Sub Category',
        visible: true,
        children: [
          { name: 'Add Product Sub Category', link: '/AddProductSubCategory',  visible: true},
          { name: 'Product Sub Category List', link: '/ListProductSubCategory', visible: true}
        ]
      },
      {
        name: 'Product Stock',
        visible: true,
        children: [
          { name: 'Add Stock', link: '/AddStock',  visible: true},
          { name: 'Stock List', link: '/ListStock', visible: true}
        ]
      },
      {
        name: 'Fixed Assets',
        visible: true,
        children: [
          { name: 'Add Assets', link: '/AddAssets',  visible: true},
          { name: 'Assets List', link: '/ListAssets', visible: true}
        ]
      }
    ]
  },
  {
    name: 'Logout',
    visible: true,
    link: ''
  },
  // Add more nodes as needed following the structure in sidebar.txt
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  hide:boolean;

  isHandset: boolean = false;
  currentUrl: string;
  screenWidth: number;
  isShowSettingsli: boolean = false
  isShowSettings = true;
  Company_name =localStorage.getItem('maincompanyname');

      
    constructor(public authService: AuthService, private router: Router) {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
      };
      this.dataSource.data = TREE_DATA;
      /*this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          const navigationEndEvent = event as NavigationEnd;
          this.currentUrl = navigationEndEvent.urlAfterRedirects;
        });*/
    }
    ///////////////////

    private _transformer = (node: MenuNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        link: node.link,
        visible: node.visible,
        level: level,
      };
    };
  
  
    treeControl = new FlatTreeControl<MenuFlatNode>(
      node => node.level,
      node => node.expandable
    );
  
    treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children
    );
  
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  

    hasChild = (_: number, node: MenuFlatNode) => node.expandable;

    //////////////////
  toggleSidenav() {
    this.isHandset = !this.isHandset;
  }
  toggleDisplaySettings() {
    this.isShowSettings = !this.isShowSettings;
  }
  @Output() sideNavToggled = new EventEmitter<void>();

  hasAccess(roles: string[]) {
    //return roles.some(role => this.authService.getrole(role));
  }
  ngOnInit() {
    let username = this.authService.getUser()
    if(username.includes("asifa")){
      this.isShowSettingsli = true
    }
  }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}
interface MenuFlatNode {
  expandable: boolean;
  name: string;
  link: string | undefined;
  visible: boolean;
  level: number;
}