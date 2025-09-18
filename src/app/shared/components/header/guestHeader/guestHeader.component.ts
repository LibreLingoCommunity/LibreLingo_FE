import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderRoutes } from '@app/app.routes';
import { DashboardRoute } from '@app/routes/basicRoutes';

@Component({
  selector: 'app-guest-header',
  imports: [RouterLink],
  templateUrl: './guestHeader.component.html',
  styleUrl: './guestHeader.component.css',
})
export class GuestHeaderComponent {
  GuestHeaderRoutes = [DashboardRoute];
  HeaderRoutes = HeaderRoutes;
}
