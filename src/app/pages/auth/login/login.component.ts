import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupRoute } from '@app/app.routes';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input() signUpPath = SignupRoute;
}
