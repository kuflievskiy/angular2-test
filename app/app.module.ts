import {NgModule,enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {AutoGrowDirective} from "./frontend/header/directives/auto-grow.directive";

import {Admin} from "./admin/admin";

import {Header} from './frontend/header/header';

import {Content} from './frontend/content/content';
import {Favorite} from "./frontend/content/favorite";
import {Like} from "./frontend/content/like";
import {Vote} from "./frontend/content/vote";
import {Footer} from "./frontend/footer";

import {ContentService} from './frontend/content/content.service';

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from "@angular/forms";


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
        , Footer

        , Content
        , Favorite
        , Like
        , Vote

        , AutoGrowDirective
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ContentService
        , appRoutingProviders
        ,  {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]

})
export class AppModule {
}
