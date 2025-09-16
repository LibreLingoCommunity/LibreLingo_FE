import { Routes } from '@angular/router';
import { AuthComponent } from '@app/pages/auth/auth.component';
import { DashboardComponent } from '@app/pages/auth/dashboard/dashboard.component';
import { LearnerDashboardComponent } from '@app/pages/auth/dashboard/learner-db/learner-db.component';
import { LinguistDashboardComponent } from '@app/pages/auth/dashboard/linguist-db/linguist-db.component';
import { LoginComponent } from '@app/pages/auth/login/login.component';
import { SignupComponent } from '@app/pages/auth/signup/signup.component';
import { HomepageComponent } from '@app/pages/homepage/homepage.component';
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';

const HomepageRoute = {
  path: '',
  title: 'Home',
  component: HomepageComponent,
};

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

const PageNotFoundRoute = {
  path: '**',
  title: 'Page not found',
  component: PageNotFoundComponent,
};

export const routes: Routes = [
  HomepageRoute,
  AuthRoute,
  LoginRoute,
  SignupRoute,
  DashboardRoute,
  LearnerDashboardRoute,
  LinguistDashboardRoute,
  PageNotFoundRoute, // Should always be the last!
];
export const HeaderRoutes: Routes = [HomepageRoute, AuthRoute];
