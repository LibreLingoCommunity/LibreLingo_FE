import { Component } from '@angular/core';
import { Course } from '@app/core/services/models/course';
import { CoursePreviewComponent } from '../../../../shared/components/course-preview/course-preview.component';

@Component({
  selector: 'app-learner-db',
  imports: [CoursePreviewComponent],
  templateUrl: './learner-db.component.html',
  styleUrl: './learner-db.component.scss',
})
export class LearnerDashboardComponent {
  startedCourses: Course[] = [
    {
      id: '1',
      name: 'Course started 1',
      description: 'Course started 1 description',
    },
    {
      id: '2',
      name: 'Course started 2',
      description: 'Course started 2 description',
    },
  ];

  availableCoursesToUnlock: Course[] = [
    {
      id: '3',
      name: 'Course available 1',
      description: 'Course available 1 description',
    },
  ];

  completedCourses: Course[] = [
    {
      id: '4',
      name: 'Course completed 1',
      description: 'Course completed 1 description',
    },
  ];
}
