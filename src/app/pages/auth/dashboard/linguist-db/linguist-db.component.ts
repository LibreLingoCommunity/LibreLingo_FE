import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '@app/core/services/models/course';
import { CreateNewCourseRoute } from '@app/routes/basicRoutes';
import { CoursePreviewComponent } from '@app/shared/components/course-preview/course-preview.component';
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
  availableCoursesToEdit = [
    {
      name: 'English',
      description: 'Course of english',
      id: '1',
    } as Course,
    {
      name: 'French',
      description: 'Course of french',
      id: '2',
    },
    {
      name: 'Spanish',
      description: 'Course of spanish',
      id: '3',
    },
  ];

  onCreateNewCourse() {
    this.router.navigate([CreateNewCourseRoute.path]);
  }
}
