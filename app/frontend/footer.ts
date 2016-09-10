import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    template:`
        <div class="text-muted">
            <div class="container">
                <p class="pull-xs-right">
                <a href="#">Back to top</a>
                </p>
                <p>Album example is Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap?<a routerLink="/">Home Page</a> or read our getting started guide.</p>
            </div>
        </div>`
})

export class Footer {
    constructor() {}
}