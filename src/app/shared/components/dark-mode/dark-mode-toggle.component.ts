import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent implements OnInit, OnDestroy {
  isDark = false;
  private sub?: Subscription;

  constructor(private theme: DarkModeService) {}

  ngOnInit(): void {
    this.sub = this.theme.isDark$.subscribe((d) => (this.isDark = d));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onToggleClick() {
    this.theme.toggle();
  }
}
