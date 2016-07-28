import { provideRouter, RouterConfig } from '@angular/router';

import { ContentRoutes } from './+content/index';
import { LoginComponent } from './+login/index';

const routes: RouterConfig = [
  ...ContentRoutes,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  /* 404 example */
  // {
  //   path: '**',
  //   redirectTo: '/404',
  //   pathMatch: 'full'
  // }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
