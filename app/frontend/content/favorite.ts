import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'favorite',
    template: '<span class="glyphicons" (click)="onClick($event)" [class.glyphicon-star-empty] = "!isActiveStar" [class.glyphicon-star] = "isActiveStar">123</span>',
    styles : [
    '.glyphicon-star-empty, .glyphicon-star{position: absolute;top: 10px;right: 20px;color: lime; font-size:25px;}.glyphicon-star-empty:hover, .glyphicon-star:hover{cursor: hand;}']

})
export class Favorite implements OnInit{
    private isActiveStar:boolean = false;
    private elementRef:ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    onClick($event){
        this.isActiveStar = ( ( true == this.isActiveStar ) ? false : true );
        this.renderStar($event.target);
    }

    renderStar(myElement){
        if(this.isActiveStar){
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