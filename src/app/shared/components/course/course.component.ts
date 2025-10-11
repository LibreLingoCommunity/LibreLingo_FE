import { Component, inject } from '@angular/core';
import { Course } from '@app/core/models/course';
import { CourseService } from '@app/core/services/course';
@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  private readonly courseService = inject(CourseService);

  // course_name should be linked with the courseStore
  course_name = this.courseService.course_name;
  course_description = this.courseService.course_description;
  courseData: Course = {} as Course;

  ngOnInit() {
    // this.courseService.setCourse(this.courseData);
  }
}
