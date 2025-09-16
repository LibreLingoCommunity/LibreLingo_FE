import { Component } from '@angular/core';
import { Course } from '@app/models/course';
import { CourseComponent } from './components/course/course/course.component';

@Component({
  selector: 'app-learner-db',
  imports: [CourseComponent],
  templateUrl: './learner-db.component.html',
  styleUrl: './learner-db.component.scss',
})
export class LearnerDashboardComponent {
  startedCourses: Course[] = [
    {
      name: 'Course started 1',
      description: 'Course started 1 description',
    },
    {
      name: 'Course started 2',
      description: 'Course started 2 description',
    },
  ];

  availableCoursesToUnlock: Course[] = [
    {
      name: 'Course available 1',
      description: 'Course available 1 description',
    },
  ];

  completedCourses: Course[] = [
    {
      name: 'Course completed 1',
      description: 'Course completed 1 description',
    },
  ];
}
