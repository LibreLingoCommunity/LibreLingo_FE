import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DashboardRoute, SignupRoute } from '@app/app.routes';

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
    console.log('submit');
    this.router.navigate([DashboardRoute.path]);
  }
}
