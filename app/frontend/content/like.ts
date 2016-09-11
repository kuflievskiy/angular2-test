import {Component, Input, Output, EventEmitter, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'like',
    template: '<span class="glyphicons glyphicon-heart" (click)="onClick($event)" [class.active]="isLiked"></span>{{numberOfLikes}}',
    styles : [
        `
        .glyphicon-heart{ color:#ccc; }
        .glyphicon-heart.active{ color:deeppink; }
        .glyphicon-heart:hover{
            cursor:pointer;
        }
        `
    ]

})
export class Like implements OnInit {
    @Input('is-liked') private isLiked: boolean = false;
    @Input('number-of-likes') private numberOfLikes: number;
    @Output('change') private change = new EventEmitter();

    constructor(private elementRef:ElementRef) {
    }

    onClick($event){
        this.isLiked = ! this.isLiked;

        if(this.isLiked){
            this.numberOfLikes +=1;
        }else {
            this.numberOfLikes -=1;
        }

        this.renderEl($event.target);
        this.change.emit({ 'isLiked' : this.isLiked, 'numberOfLikes' : this.numberOfLikes });
    }

    renderEl(myElement){
        if(this.isLiked){
            myElement.innerHTML = '&#9829;';
        }else{
            myElement.innerHTML = '&#9825;';
        }
    }

    ngOnInit() {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>

        this.renderEl(this.elementRef.nativeElement.children[0]);
    }
}