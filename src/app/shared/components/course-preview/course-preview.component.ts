import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '@app/core/models/course';
import { CourseService } from '@app/core/services/course';
import { LearnerDashboardRoute } from '@app/routes/basicRoutes';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-course-preview',
  imports: [Button],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.css',
})
export class CoursePreviewComponent {
  @Input() course!: Course;
  LearnerDashboardRoute = LearnerDashboardRoute;

  constructor(private router: Router, private courseService: CourseService) {}

  onSeeMore(id: string) {
    // It should open the course in a modal
    //this.router.navigate([this.LearnerDashboardRoute.path, id]);
  }

  onOpenCourse(id: string) {
    this.courseService.setCourse(this.course);
    this.router.navigate([this.LearnerDashboardRoute.path, id]);
  }
}
