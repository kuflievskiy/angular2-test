import {Component} from '@angular/core';
import {ContentService} from "./content.service";

@Component({
    selector: 'content',
    template : `
<section class="jumbotron text-xs-center">
	<div class="container">
		<h1 class="jumbotron-heading">Angular 2 Test application</h1>
		<p class="lead text-muted">
			A simple app built for learning angular2, demonstrating several core features and concepts.
			Original source on github.com : <a href="https://github.com/kuflievskiy/angular2-test" target="_blank" title="Original repository">https://github.com/kuflievskiy/angular2-test</a>
		</p>
		<p>
			<a href="#" class="btn btn-primary">Main call to action</a>
		<a href="#" class="btn btn-secondary">Secondary action</a>
		</p>
	</div>
</section>
<div class="album text-muted">
	<div class="container">
		<div class="row">		    
            <nav class="navbar navbar-light bg-faded">
                View mode:
                <ul class="nav navbar-nav">
                    <li class="nav-item" [class.active]="viewMode == 'album'"><a class="nav-link" href="#" (click)="viewMode = 'album'">Album</a></li>                
                    <li class="nav-item" [class.active]="viewMode == 'list'"><a class="nav-link" href="#" (click)="viewMode = 'list'">List</a></li>
                </ul>
            </nav>
            <div *ngIf="items.length == 0">
			    <p>Sorry, there are no items in the list...</p>
            </div>
            <div *ngIf="items.length > 0">
            
                <div [ngSwitch]="viewMode">                
                    <template ngSwitchDefault [ngSwitchCase]="'list'">
                        <div class="list-group">
                            <div *ngFor="let item of items" class="list-group-item">
                                <h5 class="list-group-item-heading">{{item.title}}</h5>
                                <img width="355px" data-src="{{item.imageUrl}}" alt="{{item.title}}">
                                <p class="list-group-item-text">{{item.description}}</p>
                                <div class="card-action-buttons">
                                <p>Mark as favorite: <favorite [is-favorite]="item.isFavorite" (change)="onFavoriteChange($event,item.id)"></favorite></p>
                                <p>Like: <like [number-of-likes]="item.numberOfLikes" [is-liked]="item.isLiked" (change)="onLikeChange($event,item.id)"></like></p>
                                <p>Vote : <vote [vote-count]="item.voteCount" [my-vote]="item.myVote" (vote)="onVoteChange($event,item.id)"></vote></p>
                                </div>
                            </div>                    
                        </div>
                    </template>
                    <template [ngSwitchCase]="'album'">
                        <div *ngFor="let item of items" class="card">
                            <h5>{{item.title}}</h5>
                            <img width="355px" data-src="{{item.imageUrl}}" alt="{{item.title}}">
                            <p class="card-text">{{item.description}}</p>
                            <div class="card-action-buttons">
                            <p>Mark as favorite: <favorite [is-favorite]="item.isFavorite" (change)="onFavoriteChange($event,item.id)"></favorite></p>
                            <p>Like: <like [number-of-likes]="item.numberOfLikes" [is-liked]="item.isLiked" (change)="onLikeChange($event,item.id)"></like></p>
                            <p>Vote : <vote [vote-count]="item.voteCount" [my-vote]="item.myVote" (vote)="onVoteChange($event,item.id)"></vote></p>
                            </div>
                        </div>
                    </template>
                </div>

            </div>
		</div>
	</div>
</div>`,
    styles:[
        `
            .card-action-buttons p{
                line-height: 0.8em;
            }
        `
    ]
})
export class Content {
    private items:any;
    private viewMode:string = 'album';
    constructor(contentService:ContentService) {
        this.items = contentService.getItems();
    }

    onFavoriteChange($event,elementID){
        console.log('onFavoriteChange for elementID :' +  elementID);
        console.log($event);
    }
    onLikeChange($event, elementID){
        console.log('onLikeChange for elementID :' +  elementID );
        console.log($event);
    }
    onVoteChange($event, elementID){
        console.log('onVoteChange for elementID :' +  elementID );
        console.log($event);
    }
}