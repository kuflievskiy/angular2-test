import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'admin',
    template: 'Welcome to the admin page!<button (click)="backToHome()">go back</button>'
})
export class Admin {

    private _router:Router;
    constructor(router: Router) {
        this._router = router;
    }

    backToHome(){
        this._router.navigate(['/']);
    }
}