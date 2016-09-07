import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListComponent} from './components/list.component';

const appRoutes: Routes = [
    {
        path: 'lists',
        component: ListComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);