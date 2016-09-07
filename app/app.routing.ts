import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import { Admin } from './admin/admin';
import {Frontend} from "./frontend/frontend";



const appRoutes: Routes = [
    { path: '', component: Frontend },
    { path: 'admin', component: Admin }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);