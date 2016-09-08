import {NgModule,enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {AutoGrowDirective} from "./frontend/header/directives/auto-grow.directive";

import {Admin} from "./admin/admin";
import {Frontend} from "./frontend/frontend";


import {Header} from './frontend/header/header';
import {Footer} from './frontend/footer/footer';
import {Content} from './frontend/content/content';
import {ContentService} from './frontend/content/content.service';

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// enableProdMode();

import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule
        , routing
        , ReactiveFormsModule
    ],
    declarations: [
        AppComponent
        , Admin
        , Frontend
        , Header
        , Footer
        , Content

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
