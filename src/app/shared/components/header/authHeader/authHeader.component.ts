import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardRoute } from '@app/routes/basicRoutes';

@Component({
  selector: 'app-auth-header',
  imports: [RouterLink],
  templateUrl: './authHeader.component.html',
  styleUrl: './authHeader.component.css',
})
export class AuthHeaderComponent {
  accountImgPath = 'public/placeholder_account.png';
  AuthHeaderRoutes = [DashboardRoute];
}
