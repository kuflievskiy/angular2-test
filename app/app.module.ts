import {NgModule,enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {AutoGrowDirective} from "./frontend/directives/auto-grow.directive";

import {Admin} from "./admin/admin";

import {Header} from './frontend/header';
import {HeaderBar} from "./frontend/header-bar";
import {Content} from './frontend/content/content';
import {Favorite} from "./frontend/content/favorite";
import {Like} from "./frontend/content/like";
import {Vote} from "./frontend/content/vote";
import {Footer} from "./frontend/footer";

import {ContentService} from './frontend/content/content.service';

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ContentTweets} from "./frontend/content/content-tweets";
import {ContentTweetsService} from "./frontend/content/content-tweets.service";
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
