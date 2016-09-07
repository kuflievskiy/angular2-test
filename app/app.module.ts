import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {ListComponent} from './components/list.component';
import {ListService} from "./services/list.service";
import {AutoGrowDirective} from "./directives/auto-grow.directive";

//import {routing, appRoutingProviders} from "./app.routing";

// import {enableProdMode} from '@angular/core';
// enableProdMode();

@NgModule({
    imports: [
        BrowserModule
//        , routing
    ],
    declarations: [
        AppComponent
        , ListComponent
        , AutoGrowDirective

    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ListService
//        , appRoutingProviders
    ]

})
export class AppModule {
}
