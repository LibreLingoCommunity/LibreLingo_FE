import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const HomepageRoute = {
  path: '',
  title: 'Home',
  component: HomepageComponent,
};

const AuthRoute = {
  path: 'access',
  title: 'Access',
  component: AuthComponent,
};

const SignupRoute = {
  path: 'sign-up',
  title: 'Sign up',
  component: AuthComponent,
};
const DefaultRoute = { path: '', redirectTo: '/', pathMatch: 'full' };

const PageNotFoundRoute = {
  path: '**',
  title: 'Page not found',
  component: PageNotFoundComponent,
};

export const routes = [
  HomepageRoute,
  AuthRoute,
  SignupRoute,
  DefaultRoute,
  PageNotFoundRoute,
];
export const HeaderRoutes: Routes = [HomepageRoute, AuthRoute, SignupRoute];
