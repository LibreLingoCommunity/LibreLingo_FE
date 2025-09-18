import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '@app/core/services/models/course';
import { LearnerDashboardRoute } from '@app/routes/basicRoutes';

@Component({
  selector: 'app-course',
  imports: [RouterLink],
  templateUrl: './coursePreview.component.html',
  styleUrl: './coursePreview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePreviewComponent {
  @Input() course!: Course;
  LearnerDashboardRoute = LearnerDashboardRoute;
}
