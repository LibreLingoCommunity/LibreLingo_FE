import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '@app/core/services/models/course';
import { LearnerDashboardRoute } from '@app/routes/basicRoutes';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-course',
  imports: [Button],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.css',
})
export class CoursePreviewComponent {
  @Input() course!: Course;
  LearnerDashboardRoute = LearnerDashboardRoute;

  constructor(private router: Router) {}

  onSeeMore(id: string) {
    this.router.navigate([this.LearnerDashboardRoute.path, id]);
  }
}
