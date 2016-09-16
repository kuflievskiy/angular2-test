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
var content_tweets_service_1 = require("./content-tweets.service");
var ContentTweets = (function () {
    function ContentTweets(contentTweetsService) {
        this.items = contentTweetsService.getItems();
    }
    ContentTweets.prototype.onLikeChange = function ($event, elementID) {
        console.log('onLikeChange for elementID : ' + elementID);
        console.log($event);
    };
    ContentTweets = __decorate([
        core_1.Component({
            selector: 'tweets',
            template: '' +
                '<div class="album text-muted">' +
                '<div class="container">' +
                '<div class="row">' +
                '<div *ngFor="let item of items" class="card">' +
                '<img width="355px" data-src="{{item.imageUrl}}" alt="{{item.title}}">' +
                '<p>{{item.name}} - <i>{{item.nickname}}</i></p>' +
                '<p>{{item.description}}</p>' +
                '<p>Like: <like [number-of-likes]="item.numberOfLikes" [is-liked]="item.isLiked" (change)="onLikeChange($event,item.id)"></like></p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>',
            styles: [
                "\n        "
            ]
        }), 
        __metadata('design:paramtypes', [content_tweets_service_1.ContentTweetsService])
    ], ContentTweets);
    return ContentTweets;
}());
exports.ContentTweets = ContentTweets;
//# sourceMappingURL=content-tweets.js.map