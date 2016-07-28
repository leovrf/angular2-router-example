import { RouterConfig } from '@angular/router';

import { ContentComponent } from './index';
import { HomeComponent } from '../+home/index';
import { AboutComponent } from '../+about/index';

export const ContentRoutes: RouterConfig = [
    {
        path: 'home',
        component: ContentComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            }
            // '/home/other-paths-under-home-should-go-here'
        ]
    },
    {
        path: 'about',
        component: ContentComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
            }
        ]
    },
];
