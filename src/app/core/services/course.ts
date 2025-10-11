// src/app/core/stores/theme/theme.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Course } from '@app/core/models/course';
import { CourseStore } from '@app/core/stores/course/course';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly courseStore = inject(CourseStore);
  private readonly httpClient = inject(HttpClient);

  course_name = this.courseStore.name;
  course_description = this.courseStore.description;
  courseUrl = 'assets/data/courses/' + this.courseStore.id + '.json';
  // Actions
  setCourse(course: Course) {
    this.courseStore.setCourse(course);
  }
  getCourseData(): Observable<any> {
    return this.httpClient.get<any>(this.courseUrl);
  }
}
