import {Component} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl:'app/frontend/header/header.html',
    styles:[
        `
        .navbar-toggler{color:#ffffe0}
        `
    ]
})
export class Header {
    constructor() {
    }
}