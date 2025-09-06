import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderRoutes } from '@app/app.routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  HeaderRoutes = HeaderRoutes;
}
