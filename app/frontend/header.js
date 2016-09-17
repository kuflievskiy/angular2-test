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
var router_1 = require("@angular/router");
var Header = (function () {
    function Header(router) {
        this.router = router;
    }
    Header.prototype.isActive = function (slug) {
        return this.router.isActive(slug, true);
    };
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            template: "\n        <div class=\"navbar-collapse collapse inverse\" id=\"navbar-header\">\n            <div class=\"container-fluid\">\n                <div class=\"about\">\n                    <h4>About</h4>\n                    <p class=\"text-muted\">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>\n                </div>\n                <div class=\"social\">\n                    <h4>Contact</h4>\n                    <ul class=\"list-unstyled\">\n                        <li><a href=\"#\">Follow on Twitter</a></li>\n                        <li><a href=\"#\">Like on Facebook</a></li>\n                        <li><a href=\"#\">Email me</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"navbar navbar-static-top navbar-dark bg-inverse\">\n            <div class=\"container-fluid\">        \n                <div class=\"col-xs-2\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-header\">&#9776;</button>\n                    <a href=\"#\" class=\"navbar-brand\">Angular 2 App</a>        \n                </div>\n                <div class=\"col-xs-10\">\n                    <ul class=\"nav nav-pills\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/\" [class.active]=\"isActive('')\">Home Page</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/admin\" [class.active]=\"isActive('admin')\">Admin Panel</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/tweets\" [class.active]=\"isActive('tweets')\">Tweets</a>\n                      </li> \n                    </ul>\n                </div>\n            </div>\n        </div>\n        ",
            styles: [
                "\n        .navbar-toggler{color:#ffffe0}\n        "
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map