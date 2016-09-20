import {Component} from '@angular/core';

@Component({
    selector: 'not-found',
    template : `
        <div class="album text-muted">
            <div class="container">
                <div class="row">
                    <h2>Page not found</h2>
                </div>
            </div>
        </div>
        `,
    styles:[
        ``
    ]
})
export class NotFound {
    constructor(){}
}