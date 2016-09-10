"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var auto_grow_directive_1 = require("./frontend/header/directives/auto-grow.directive");
var admin_1 = require("./admin/admin");
var frontend_1 = require("./frontend/frontend");
var header_1 = require('./frontend/header/header');
var footer_1 = require('./frontend/footer/footer');
var content_1 = require('./frontend/content/content');
var content_service_1 = require('./frontend/content/content.service');
var app_routing_1 = require('./app.routing');
var common_1 = require('@angular/common');
var forms_1 = require("@angular/forms");
var favorite_1 = require("./frontend/content/favorite");
// enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_1.Admin,
                frontend_1.Frontend,
                header_1.Header,
                footer_1.Footer,
                content_1.Content,
                favorite_1.Favorite,
                auto_grow_directive_1.AutoGrowDirective
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                content_service_1.ContentService,
                app_routing_1.appRoutingProviders,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map