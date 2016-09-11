import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

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
                color:#000;
            }
        `
    ]
})
export class Vote implements OnInit{
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

                this.isVoteUpArrowActive = true;
                this.isVoteDownArrowActive = false;
            }

        }else if( 'down' == direction ) {
            if( this.myVote >= 0 ) {
                this.myVote = -1;
                isStateChanged = true;


                this.isVoteUpArrowActive = false;
                this.isVoteDownArrowActive = true;
            }
        }

        if(isStateChanged){
            this.voteCount += this.myVote;
        }

        this.vote.emit({ 'myVote' : this.myVote });
    }

    ngOnInit(){
        if( this.myVote > 0 ) {
            this.isVoteUpArrowActive = true;
        } else if ( this.myVote < 0 ) {
            this.isVoteDownArrowActive = true;
        }
    }
}