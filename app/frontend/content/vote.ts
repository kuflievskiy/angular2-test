import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'vote',
    template: `
        <span class="vote-up" [class.active]="myVote == 1" (click)="onClick($event,'up')">⮝</span>
        <span class="votes-count">{{voteCount+myVote}}</span>
        <span class="vote-down" [class.active]="myVote == -1" (click)="onClick($event,'down')">⮟</span>
        `,
    styles : [
        `
            .vote-up,.vote-down{
                cursor:pointer;
            }
            .vote-up.active,.vote-down.active{
                color:#000;
            }
        `
    ]
})
export class Vote implements OnInit{
    @Input('vote-count') private voteCount: number;
    @Input('my-vote') private myVote: number;

    @Output('vote') private vote = new EventEmitter();

    constructor() {}

    onClick($event,direction){
        if( 'up' == direction ) {
            if( this.myVote <= 0 ) {
                this.myVote = 1;
            }
        }else if( 'down' == direction ) {
            if( this.myVote >= 0 ) {
                this.myVote = -1;
            }
        }

        this.vote.emit({ 'myVote' : this.myVote });
    }
}