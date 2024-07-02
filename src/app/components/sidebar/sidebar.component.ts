

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isHandset: boolean = false;
  currentUrl: string;
  screenWidth: number;
  isShowSettingsli : boolean = true
  /*constructor(public authService: AuthService, private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = (event as NavigationEnd).urlAfterRedirects;
      });
  }*/
    constructor(public authService: AuthService, private router: Router) {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
      };

      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          const navigationEndEvent = event as NavigationEnd;
          this.currentUrl = navigationEndEvent.urlAfterRedirects;
        });
    }

  toggleSidenav() {
    this.isHandset = !this.isHandset;
  }

  menuItems = [
    { label: 'Add Main Company', link: '/AddMainCompany', roles: ['superadmin'] },
    { label: 'Main Company List', link: '/ListMainCompany', roles: ['superadmin'] },
    { label: 'Add Users', link: '/AddUsers', roles: ['superadmin'] },
    { label: 'User List', link: '/ListUsers', roles: ['superadmin'] },
    { label: 'Add Roles', link: '/AddRoles', roles: ['superadmin'] },
    { label: 'Roles List', link: '/ListRoles', roles: ['superadmin'] },
    // Add other menu items similarly from the provided list
  ];

  hasAccess(roles: string[]) {
    //return roles.some(role => this.authService.getrole(role));
  }
}
