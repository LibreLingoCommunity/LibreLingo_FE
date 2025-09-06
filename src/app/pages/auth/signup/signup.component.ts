import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DashboardRoute, LoginRoute } from '@app/app.routes';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  /**
   *
   */
  constructor(private router: Router) {}
  loginPath = LoginRoute;

  onSubmit() {
    console.log('submit');
    this.router.navigate([DashboardRoute.path]);
  }
}
