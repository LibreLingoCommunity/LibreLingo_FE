import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardRoute } from '@app/app.routes';
import { LogoComponent } from '@app/shared/components/header/logo/logo.component';

@Component({
  selector: 'app-auth-header',
  imports: [LogoComponent, RouterLink],
  templateUrl: './authHeader.component.html',
  styleUrl: './authHeader.component.css',
})
export class AuthHeaderComponent {
  accountImgPath = 'public/placeholder_account.png';
  AuthHeaderRoutes = [DashboardRoute];
}
