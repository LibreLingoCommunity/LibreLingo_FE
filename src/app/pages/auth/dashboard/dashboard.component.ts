import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  LearnerDashboardRoute,
  LinguistDashboardRoute,
} from '@app/routes/basicRoutes';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  imports: [Button],
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
