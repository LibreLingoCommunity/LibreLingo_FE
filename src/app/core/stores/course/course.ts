// src/app/core/stores/theme/theme.store.ts
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Course } from '@app/core/models/course';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const CourseStore = signalStore(
  { providedIn: 'root' },
  withDevtools('CourseStore'),
  withState<Course>({
    name: '',
    description: '',
    id: '',
    modules: [],
    loading: false,
  }),

  withMethods((store, http: HttpClient = inject(HttpClient)) => ({
    setCourse(course: Course) {
      patchState(store, {
        name: course.name,
        description: course.description,
        id: course.id,
      });
    },
    setModules(modules: any[]) {
      patchState(store, {
        modules: modules,
      });
    },
    setLoading(loading: boolean) {
      patchState(store, {
        loading: loading,
      });
    },

    loadModules() {
      const courseId = store.id();
      if (!courseId) return;
      const courseUrl = 'assets/data/courses/' + courseId + '.json';

      http.get(courseUrl).subscribe({
        next: (data) => {
          console.log(data);

          this.setModules(data as any[]);
        },
        error: () => this.setLoading(false),
      });
    },
  }))
);
