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
        this.items = contentService.getItems();
    }
    Content.prototype.onFavoriteChange = function ($event, elementID) {
        console.log('onFavoriteChange for elementID : ' + elementID);
        console.log($event);
    };
    Content.prototype.onLikeChange = function ($event, elementID) {
        console.log('onLikeChange for elementID : ' + elementID);
        console.log($event);
    };
    Content.prototype.onVoteChange = function ($event, elementID) {
        console.log('onVoteChange for elementID : ' + elementID);
        console.log($event);
    };
    Content = __decorate([
        core_1.Component({
            selector: 'content',
            template: '' +
                '<div class="album text-muted">' +
                '<div class="container">' +
                '<div class="row">' +
                '<div *ngFor="let item of items" class="card">' +
                '<img width="355px" data-src="{{item.imageUrl}}" alt="{{item.title}}">' +
                '<p class="card-text">{{item.description}}</p>' +
                '<div class="card-action-buttons">' +
                '<p>Mark as favorite: <favorite [is-favorite]="item.isFavorite" (change)="onFavoriteChange($event,item.id)"></favorite></p>' +
                '<p>Like: <like [number-of-likes]="item.numberOfLikes" [is-liked]="item.isLiked" (change)="onLikeChange($event,item.id)"></like></p>' +
                '<p>Vote : <vote [vote-count]="item.voteCount" [my-vote]="item.myVote" (vote)="onVoteChange($event,item.id)"></vote></p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>',
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