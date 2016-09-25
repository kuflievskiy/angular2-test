import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import { Admin } from './admin/admin';
import { Content } from "./frontend/pages/home/content";
import {ContentTweets} from "./frontend/pages/tweets/content-tweets";
import {About} from "./frontend/pages/about/about";
import {ContactUs} from "./frontend/pages/contact-us/contact-us.component";
import {NotFound} from "./frontend/pages/not-found/not-found";
import {SignUpForm} from "./frontend/pages/signup/signup";
import {ResetPasswordForm} from "./frontend/pages/resetpassword/resetpassword.form";
import {HttpClass} from "./frontend/pages/http-class/http-class";


const appRoutes: Routes = [
    { path: '', component: Content }
    ,{ path: 'tweets', component: ContentTweets }
    ,{ path: 'about', component : About }
    ,{ path: 'admin', component: Admin }
    ,{ path: 'contact-us', component : ContactUs }
    ,{ path: 'signup', component : SignUpForm }
    ,{ path: 'reset-password', component : ResetPasswordForm }
    ,{ path: 'http-class', component: HttpClass }
    ,{ path: '**', component: NotFound }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);