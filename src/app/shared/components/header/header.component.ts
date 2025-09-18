import { Component } from '@angular/core';
import { AuthHeaderComponent } from './authHeader/authHeader.component';
import { GuestHeaderComponent } from './guestHeader/guestHeader.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, AuthHeaderComponent, GuestHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAuthenticated = true;
}
