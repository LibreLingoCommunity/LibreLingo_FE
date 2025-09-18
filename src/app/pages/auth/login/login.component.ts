import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DashboardRoute, SignupRoute } from '@app/routes/basicRoutes';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input() signUpPath = SignupRoute;

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate([DashboardRoute.path]);
  }
}
