import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  @Input()
  course_name: string | null = null;
}
