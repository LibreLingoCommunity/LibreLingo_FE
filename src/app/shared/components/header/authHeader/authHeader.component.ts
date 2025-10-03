import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardRoute } from '@app/routes/basicRoutes';
import { DarkModeToggleComponent } from '../../dark-mode/dark-mode-toggle.component';

@Component({
  selector: 'app-auth-header',
  imports: [RouterLink, DarkModeToggleComponent],
  templateUrl: './authHeader.component.html',
  styleUrl: './authHeader.component.css',
})
export class AuthHeaderComponent {
  accountImgPath = 'public/placeholder_account.png';
  AuthHeaderRoutes = [DashboardRoute];
}
