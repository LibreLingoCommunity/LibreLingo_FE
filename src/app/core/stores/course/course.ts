// src/app/core/stores/theme/theme.store.ts
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { Course } from '@app/core/models/course';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
export const CourseStore = signalStore(
  { providedIn: 'root' },
  withDevtools('CourseStore'),
  withState<Course>({ name: '', description: '', id: '' }),

  withMethods((store) => ({
    setCourse(course: Course) {
      patchState(store, {
        name: course.name,
        description: course.description,
        id: course.id,
      });
    },
  }))
);
