import {NgModule,enableProdMode}      from '@angular/core';
import {environment} from "./environments/environment";
import { HttpModule }    from '@angular/http';

import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {AutoGrowDirective} from "./frontend/directives/auto-grow.directive";

import {Admin} from "./admin/admin";

import {Header} from './frontend/header';
import {HeaderBar} from "./frontend/header-bar";
import {Content} from './frontend/pages/home/content';
import {About} from "./frontend/pages/about/about";
import { QuestionsService } from './frontend/pages/about/questions.service';


import {Favorite} from "./frontend/components/favorite";
import {Like} from "./frontend/components/like";
import {Vote} from "./frontend/components/vote";
import {Footer} from "./frontend/footer";

import {ContentService} from './frontend/pages/home/content.service';

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule, Form, ReactiveFormsModule} from "@angular/forms";
import {ContentTweets} from "./frontend/pages/tweets/content-tweets";
import {ContentTweetsService} from "./frontend/pages/tweets/content-tweets.service";
import {SummaryPipe} from "./frontend/pipes/summary.pipe";
import {Zippy} from "./frontend/components/zippy";
import {ContactUs} from "./frontend/pages/contact-us/contact-us.component";
import {NotFound} from "./frontend/pages/not-found/not-found";
import {SignUpForm} from "./frontend/pages/signup/signup";
import {ResetPasswordForm} from "./frontend/pages/resetpassword/resetpassword.form";
import {RxExtensions} from "./frontend/pages/rxjs-extensions";
import {HttpClass} from "./frontend/pages/http-class/http-class";
import {HttpClassService} from "./frontend/pages/http-class/http-class.service";

if (environment.production) {
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule
        , routing
        , FormsModule
        , ReactiveFormsModule
        , HttpModule
    ],
    declarations: [
        AppComponent
        , Admin
        , Header
        , HeaderBar
        , Footer

        , Content
        , ContentTweets
        , About
        , ContactUs
        , NotFound
        , SignUpForm
        , ResetPasswordForm
        , HttpClass
        , RxExtensions

        , Favorite
        , Like
        , Vote
        , Zippy

        , AutoGrowDirective
        , SummaryPipe

    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ContentService
        , ContentTweetsService
        , QuestionsService
        , HttpClassService

        , appRoutingProviders
        ,  {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]

})
export class AppModule {
}
