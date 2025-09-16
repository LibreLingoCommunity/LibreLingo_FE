import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '@app/core/services/models/course';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  @Input() course!: Course;
}
