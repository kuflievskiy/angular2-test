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
var content_service_1 = require("./content.service");
var Content = (function () {
    function Content(contentService) {
        this.viewMode = 'album';
        this.items = contentService.getItems();
    }
    Content.prototype.onFavoriteChange = function ($event, elementID) {
        console.log('onFavoriteChange for elementID :' + elementID);
        console.log($event);
    };
    Content.prototype.onLikeChange = function ($event, elementID) {
        console.log('onLikeChange for elementID :' + elementID);
        console.log($event);
    };
    Content.prototype.onVoteChange = function ($event, elementID) {
        console.log('onVoteChange for elementID :' + elementID);
        console.log($event);
    };
    Content = __decorate([
        core_1.Component({
            selector: 'content',
            template: "\n<section class=\"jumbotron text-xs-center\">\n\t<div class=\"container\">\n\t\t<h1 class=\"jumbotron-heading\">Angular 2 Test application</h1>\n\t\t<p class=\"lead text-muted\">\n\t\t\tA simple app built for learning angular2, demonstrating several core features and concepts.\n\t\t\tOriginal source on github.com : <a href=\"https://github.com/kuflievskiy/angular2-test\" target=\"_blank\" title=\"Original repository\">https://github.com/kuflievskiy/angular2-test</a>\n\t\t</p>\n\t\t<p>\n\t\t\t<a href=\"#\" class=\"btn btn-primary\">Main call to action</a>\n\t\t<a href=\"#\" class=\"btn btn-secondary\">Secondary action</a>\n\t\t</p>\n\t</div>\n</section>\n<div class=\"album text-muted\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\t    \n            <nav class=\"navbar navbar-light bg-faded\">\n                View mode:\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"nav-item\" [class.active]=\"viewMode == 'album'\"><a class=\"nav-link\" href=\"#\" (click)=\"viewMode = 'album'\">Album</a></li>                \n                    <li class=\"nav-item\" [class.active]=\"viewMode == 'list'\"><a class=\"nav-link\" href=\"#\" (click)=\"viewMode = 'list'\">List</a></li>\n                </ul>\n            </nav>\n            <div *ngIf=\"items.length == 0\">\n\t\t\t    <p>Sorry, there are no items in the list...</p>\n            </div>\n            <div *ngIf=\"items.length > 0\">\n            \n                <div [ngSwitch]=\"viewMode\">                \n                    <template ngSwitchDefault [ngSwitchCase]=\"'list'\">\n                        <div class=\"list-group\">\n                            <div *ngFor=\"let item of items, let i = index\" class=\"list-group-item\">\n                                <h5 class=\"list-group-item-heading\">#{{i+1}} - {{item.title}}</h5>\n                                <img width=\"355px\" data-src=\"{{item.imageUrl}}\" alt=\"{{item.title}}\">\n                                <p class=\"list-group-item-text\">{{item.description | summary}}</p>\n                                <div class=\"card-action-buttons\">\n                                <p>Mark as favorite: <favorite [is-favorite]=\"item.isFavorite\" (change)=\"onFavoriteChange($event,item.id)\"></favorite></p>\n                                <p>Like: <like [number-of-likes]=\"item.numberOfLikes\" [is-liked]=\"item.isLiked\" (change)=\"onLikeChange($event,item.id)\"></like></p>\n                                <p>Vote : <vote [vote-count]=\"item.voteCount\" [my-vote]=\"item.myVote\" (vote)=\"onVoteChange($event,item.id)\"></vote></p>\n                                </div>\n                            </div>                    \n                        </div>\n                    </template>\n                    <template [ngSwitchCase]=\"'album'\">\n                        <div *ngFor=\"let item of items, let i = index\" class=\"card\">\n                            <h5>#{{i+1}} - {{item.title}}</h5>\n                            <img width=\"355px\" data-src=\"{{item.imageUrl}}\" alt=\"{{item.title}}\">\n                            <p class=\"card-text\">{{item.description | summary }}</p>\n                            <div class=\"card-action-buttons\">\n                            <p>Mark as favorite: <favorite [is-favorite]=\"item.isFavorite\" (change)=\"onFavoriteChange($event,item.id)\"></favorite></p>\n                            <p>Like: <like [number-of-likes]=\"item.numberOfLikes\" [is-liked]=\"item.isLiked\" (change)=\"onLikeChange($event,item.id)\"></like></p>\n                            <p>Vote : <vote [vote-count]=\"item.voteCount\" [my-vote]=\"item.myVote\" (vote)=\"onVoteChange($event,item.id)\"></vote></p>\n                            </div>\n                        </div>\n                    </template>\n                </div>\n\n            </div>\n\t\t</div>\n\t</div>\n</div>",
            styles: [
                "\n            .card-action-buttons p{\n                line-height: 0.8em;\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService])
    ], Content);
    return Content;
}());
exports.Content = Content;
//# sourceMappingURL=content.js.map