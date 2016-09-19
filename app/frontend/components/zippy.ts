import {Component, Input} from '@angular/core';

@Component({
    selector: 'zippy',
    template : `
            <i><h4 class="title" (click)="onClick($event)">{{title}}</h4></i>
            <div class="content" [ngStyle]="{'display': isOpened ? 'block':'none'}"><ng-content></ng-content></div>
    `,
    styles:[
        ``
    ]
})
export class Zippy {
    @Input('title') private title:string;
    private isOpened:boolean = false;

    constructor(){}
    onClick($event){
        this.isOpened = !this.isOpened;
    }
}