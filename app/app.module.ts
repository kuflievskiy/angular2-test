import {NgModule,enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {AutoGrowDirective} from "./frontend/directives/auto-grow.directive";

import {Admin} from "./admin/admin";

import {Header} from './frontend/header';
import {HeaderBar} from "./frontend/header-bar";
import {Content} from './frontend/pages/home/content';
import {About} from "./frontend/pages/about";

import {Favorite} from "./frontend/components/favorite";
import {Like} from "./frontend/components/like";
import {Vote} from "./frontend/components/vote";
import {Footer} from "./frontend/footer";

import {ContentService} from './frontend/pages/home/content.service';

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ContentTweets} from "./frontend/pages/tweets/content-tweets";
import {ContentTweetsService} from "./frontend/pages/tweets/content-tweets.service";
import {SummaryPipe} from "./frontend/pipes/summary.pipe";


// enableProdMode();

@NgModule({
    imports: [
        BrowserModule
        , routing
        , FormsModule
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
        , Favorite
        , Like
        , Vote

        , AutoGrowDirective
        , SummaryPipe

    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ContentService
        , ContentTweetsService
        , appRoutingProviders
        ,  {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]

})
export class AppModule {
}
