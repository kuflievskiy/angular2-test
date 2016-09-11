import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vote',
    template: `
        <span class="vote-up" [class.active]="isVoteUpArrowActive" (click)="onClick($event,'up')">⮝</span>
        <span class="votes-count">{{voteCount}}</span>
        <span class="vote-down" [class.active]="isVoteDownArrowActive" (click)="onClick($event,'down')">⮟</span>
        `,
    styles : [
        `
            .vote-up,.vote-down{
                cursor:pointer;
            }
            .vote-up.active,.vote-down.active{
                font-weight: bold;
            }
        `
    ]
})
export class Vote {
    @Input('vote-count') private voteCount: number;
    @Input('my-vote') private myVote: number;

    @Output('vote') private vote = new EventEmitter();

    isVoteUpArrowActive : boolean = false;
    isVoteDownArrowActive : boolean = false;

    constructor() {
    }

    onClick($event,direction){

        let isStateChanged = false;

        if( 'up' == direction ) {
            if( this.myVote <= 0 ) {
                this.myVote = 1;
                isStateChanged = true;
            }


            this.isVoteUpArrowActive = true;
            this.isVoteUpArrowActive = false;
        }else if( 'down' == direction ) {
            if( this.myVote >= 0 ) {
                this.myVote = -1;
                isStateChanged = true;
            }

            this.isVoteUpArrowActive = false;
            this.isVoteUpArrowActive = true;
        }

        if(isStateChanged){
            this.voteCount += this.myVote;
        }

        this.vote.emit({ 'myVote' : this.myVote });
    }
}