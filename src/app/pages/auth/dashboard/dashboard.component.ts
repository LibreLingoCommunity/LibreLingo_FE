import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LearnerDashboardRoute, LinguistDashboardRoute } from '@app/app.routes';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToLearnerDashboard() {
    this.router.navigate([LearnerDashboardRoute.path]);
  }

  goToLinguistDashboard() {
    this.router.navigate([LinguistDashboardRoute.path]);
  }
}
