import { CourseComponent } from '@app/pages/auth/dashboard/learner-db/components/course/course.component';
import { LearnerDashboardRoute } from '@app/routes/basicRoutes';

export const CourseRoute = {
  path: LearnerDashboardRoute.path + '/:id_course',
  title: 'Course',
  component: CourseComponent,
};
export const authRoutes = [CourseRoute];
