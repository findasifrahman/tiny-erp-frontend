import { Component } from '@angular/core';
import { Router, NavigationEnd,Event as RouterEvent  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidebar: boolean = false;

  constructor(private router: Router, public authService: AuthService) {
    /*
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showSidebar = this.authService.isLoggedIn() && !['/login', '/change-password'].includes(event.urlAfterRedirects);
    })*/
  }
}
