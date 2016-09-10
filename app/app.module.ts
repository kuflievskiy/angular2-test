import {NgModule,enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {AutoGrowDirective} from "./frontend/header/directives/auto-grow.directive";

import {Admin} from "./admin/admin";
import {Frontend} from "./frontend/frontend";


import {Header} from './frontend/header/header';
import {Footer} from "./frontend/footer";
import {Content} from './frontend/content/content';


import {ContentService} from './frontend/content/content.service';

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Favorite} from "./frontend/content/favorite";


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
        , Frontend
        , Header
        , Footer

        , Content
        , Favorite

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
