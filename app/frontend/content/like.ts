import {Component, Input, Output, EventEmitter, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'like',
    template: `<span (click)="onClick($event)" 
                    [ngClass]="{
                        'active':isLiked,
                        'glyphicons':true,
                        'glyphicon-heart':true
                    }"
                    [ngStyle]="{
                        'color':isLiked ? 'deeppink':'#ccc',
                        'cursor':'pointer'
                    }"
                    >
                    </span>{{numberOfLikes}}`
})
export class Like implements OnInit {
    @Input('is-liked') private isLiked: boolean = false;
    @Input('number-of-likes') private numberOfLikes: number;
    @Output('change') private change = new EventEmitter();

    constructor(private elementRef: ElementRef) {
    }

    onClick($event) {
        this.isLiked = !this.isLiked;
        this.numberOfLikes += this.isLiked ? 1 : -1;
        this.renderEl($event.target);
        this.change.emit({'isLiked': this.isLiked, 'numberOfLikes': this.numberOfLikes});
    }

    renderEl(myElement) {
        if (this.isLiked) {
            myElement.innerHTML = '&#9829;';
        } else {
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