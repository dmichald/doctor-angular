import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  isLoggedIn = this.authService;
  @Output() public sidenavToggle = new EventEmitter();

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  isAuthenticated = this.authService.isAuthenticated();

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toLoginPage() {
    this.router.navigate(['/login']);
  }
}
