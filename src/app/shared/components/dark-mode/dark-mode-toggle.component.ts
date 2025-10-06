import { Component, inject } from '@angular/core';
import { ThemeService } from '@app/core/services/theme';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
  private readonly themeService = inject(ThemeService);

  mode = this.themeService.mode;

  onToggleClick() {
    this.themeService.toggleTheme();
  }
}
