import {
  LearnerDashboardRoute,
  LinguistDashboardRoute,
} from '@app/routes/basicRoutes';
import { CourseComponent } from '@app/shared/components/course/course.component';

export const LearnerCourseRoute = {
  path: LearnerDashboardRoute.path + '/:id_course',
  title: 'Course',
  component: CourseComponent,
};
export const LinguistCourseRoute = {
  path: LinguistDashboardRoute.path + '/:id_course',
  title: 'Course',
  component: CourseComponent,
};
export const authRoutes = [LearnerCourseRoute, LinguistCourseRoute];
