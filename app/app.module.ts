import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {ListComponent} from './components/list.component';
import {ListService} from "./services/list.service";
import {AutoGrowDirective} from "./directives/auto-grow.directive";

import {Admin} from "./admin/admin";
import {Frontend} from "./frontend/frontend";

import { routing, appRoutingProviders } from './app.routing';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import {enableProdMode} from '@angular/core';
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

        , ListComponent

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
