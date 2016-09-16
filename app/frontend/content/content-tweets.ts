import {Component} from '@angular/core';
import {ContentTweetsService} from "./content-tweets.service";

@Component({
    selector: 'tweets',
    template : '' +
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
    styles:[
        `
        `
    ]
})
export class ContentTweets {
    private items:any;
    constructor(contentTweetsService:ContentTweetsService) {
        this.items = contentTweetsService.getItems();
    }
    onLikeChange($event, elementID){
        console.log('onLikeChange for elementID : ' + elementID );
        console.log($event);
    }
}