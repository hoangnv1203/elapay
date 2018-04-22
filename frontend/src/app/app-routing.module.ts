import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from './app.constants';

const LAYOUT_ROUTES = [
    navbarRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        // RouterModule.forRoot(LAYOUT_ROUTES, { useHash: false , enableTracing: DEBUG_INFO_ENABLED })
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: false , enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class WebClientAppRoutingModule {}
