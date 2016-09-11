import {Component} from '@angular/core';
import {ContentService} from "./content.service";

@Component({
    selector: 'content',
    template : '' +
    '<div class="album text-muted">' +
        '<div class="container">' +
            '<div class="row">' +
                '<div *ngFor="let item of items" class="card">' +
                    '<img width="355px" data-src="{{item.imageUrl}}" alt="{{item.title}}">' +
                    '<p class="card-text">{{item.description}}</p>' +
                    '<div class="card-action-buttons">' +
                    '<p>Mark as favorite: <favorite [is-favorite]="item.isFavorite" (change)="onFavoriteChange($event,item.id)"></favorite></p>' +
                    '<p>Like: <like [number-of-likes]="item.numberOfLikes" [is-liked]="item.isLiked" (change)="onLikeChange($event,item.id)"></like></p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>',
    styles:[
        `
            .card-action-buttons p{
                line-height: 0em;
            }
        `
    ]
})
export class Content {
    private items:any;
    constructor(contentService:ContentService) {
        this.items = contentService.getItems();
    }

    onFavoriteChange($event,elementID){
        console.log('onFavoriteChange for elementID : ' + elementID );
        console.log($event);
    }
    onLikeChange($event, elementID){
        console.log('onLikeChange for elementID : ' + elementID );
        console.log($event);
    }
}