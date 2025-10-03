import { AuthComponent } from '@app/pages/auth/auth.component';
import { DashboardComponent } from '@app/pages/auth/dashboard/dashboard.component';
import { LearnerDashboardComponent } from '@app/pages/auth/dashboard/learner-db/learner-db.component';
import { CreateNewCourseComponent } from '@app/pages/auth/dashboard/linguist-db/create-new-course/create-new-course.component';
import { LinguistDashboardComponent } from '@app/pages/auth/dashboard/linguist-db/linguist-db.component';
import { LoginComponent } from '@app/pages/auth/login/login.component';
import { SignupComponent } from '@app/pages/auth/signup/signup.component';

export const AuthRoute = {
  path: 'access',
  title: 'Access',
  component: AuthComponent,
};

export const LoginRoute = {
  path: 'login',
  title: 'Log in',
  component: LoginComponent,
};

export const SignupRoute = {
  path: 'sign-up',
  title: 'Sign up',
  component: SignupComponent,
};

export const DashboardRoute = {
  path: 'dashboard',
  title: 'Dashboard',
  component: DashboardComponent,
};

export const LearnerDashboardRoute = {
  path: 'learner-dashboard',
  title: 'Learner dashboard',
  component: LearnerDashboardComponent,
};

export const LinguistDashboardRoute = {
  path: 'linguist-dashboard',
  title: 'Linguist dashboard',
  component: LinguistDashboardComponent,
};

export const CreateNewCourseRoute = {
  path: 'create-new-course',
  title: 'Create new course',
  component: CreateNewCourseComponent,
};

export const basicRoutes = [
  AuthRoute,
  LoginRoute,
  SignupRoute,
  DashboardRoute,
  LearnerDashboardRoute,
  LinguistDashboardRoute,
  CreateNewCourseRoute,
];
