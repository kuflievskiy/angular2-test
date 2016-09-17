import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'admin',
    template: `
    <div class="album text-muted">
        <div class="container">
            <div class="row">
                <h1>Welcome to the admin page!</h1>
                <p>
                    <button class="btn btn-default" (click)="backToHome()">go back</button>                
                </p>
            </div>
        </div>
    </div>`
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