import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderRoutes } from '@app/app.routes';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  HeaderRoutes = HeaderRoutes;
}
