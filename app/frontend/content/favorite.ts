import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'favorite',
    template: '<span class="glyphicons" (click)="onClick($event)" [class.glyphicon-star-empty] = "!isFavorite" [class.glyphicon-star] = "isFavorite"></span>',
    styles : [
        `
        .glyphicon-star{
            color:#000;
        }
        .glyphicon-star-empty, .glyphicon-star{
            font-size:25px;
        }
        .glyphicon-star-empty:hover, .glyphicon-star:hover{
            cursor: hand;
        }`
    ]
})
export class Favorite implements OnInit{
    @Input('is-favorite') private isFavorite: boolean = false;
    @Output('change') private change = new EventEmitter();

    private elementRef:ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    onClick($event){
        this.isFavorite = ( ( true == this.isFavorite ) ? false : true );
        this.renderStar($event.target);
        this.change.emit({ newValue : this.isFavorite });
    }

    renderStar(myElement){
        if(this.isFavorite){
            myElement.innerHTML = '&#x2605;';   // BLACK STAR
        }else{
            myElement.innerHTML = '&#x2606;'; // WHITE STAR
        }
    }
    ngOnInit() {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        
        this.renderStar(this.elementRef.nativeElement.children[0]);
    }
}