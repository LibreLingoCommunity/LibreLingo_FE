import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursePreviewComponent } from '@app/pages/auth/dashboard/learner-db/components/coursePreview/coursePreview.component';
import { CreateNewCourseRoute } from '@app/routes/basicRoutes';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-linguist-db',
  imports: [ButtonModule, CoursePreviewComponent],
  templateUrl: './linguist-db.component.html',
  styleUrl: './linguist-db.component.scss',
})
export class LinguistDashboardComponent {
  constructor(private router: Router) {}
  allCourses = [];
  availableCoursesToUnlock = [];

  onCreateNewCourse() {
    this.router.navigate([CreateNewCourseRoute.path]);
  }
}
