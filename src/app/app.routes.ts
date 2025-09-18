import { Routes } from '@angular/router';
import { HomepageComponent } from '@app/pages/homepage/homepage.component';
import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';
import { authRoutes } from '@app/routes/authRoutes';
import { AuthRoute, basicRoutes } from '@app/routes/basicRoutes';
const HomepageRoute = {
  path: '',
  title: 'Home',
  component: HomepageComponent,
};

const PageNotFoundRoute = {
  path: '**',
  title: 'Page not found',
  component: PageNotFoundComponent,
};
export const routes: Routes = [
  HomepageRoute,
  ...basicRoutes,
  ...authRoutes,
  PageNotFoundRoute, // Should always be the last!
];
export const HeaderRoutes: Routes = [HomepageRoute, AuthRoute];
