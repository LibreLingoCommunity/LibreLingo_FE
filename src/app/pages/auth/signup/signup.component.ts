import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginRoute } from '@app/app.routes';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  loginPath = LoginRoute;
}
