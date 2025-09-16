import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthHeaderComponent } from './shared/components/header/authHeader/authHeader.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AuthHeaderComponent,
  ],
})
export class AppComponent {
  title = 'LibreLingoCommunity_FE';
  isAuthenticated = true;
}
