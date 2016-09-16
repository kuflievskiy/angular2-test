import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import { Admin } from './admin/admin';
import { Content } from "./frontend/content/content";
import {ContentTweets} from "./frontend/content/content-tweets";



const appRoutes: Routes = [
    { path: '', component: Content },
    { path: 'tweets', component: ContentTweets },
    { path: 'admin', component: Admin }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);