import {NgModule,enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {ListService} from "./services/list.service";
import {AutoGrowDirective} from "./directives/auto-grow.directive";

import {Admin} from "./admin/admin";
import {Frontend} from "./frontend/frontend";

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// enableProdMode();

@NgModule({
    imports: [
        BrowserModule
        , routing
    ],
    declarations: [
        AppComponent
        , Admin
        , Frontend

        , AutoGrowDirective
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ListService
        , appRoutingProviders
        ,  {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]

})
export class AppModule {
}
