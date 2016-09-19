import {Component} from '@angular/core';

@Component({
    selector: 'header',
    template:`
        <div class="navbar-collapse collapse inverse" id="navbar-header">
            <div class="container-fluid">
                <div class="about">
                    <h4>About</h4>
                    <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div class="social">
                    <h4>Contact</h4>
                    <ul class="list-unstyled">
                        <li><a href="#">Follow on Twitter</a></li>
                        <li><a href="#">Like on Facebook</a></li>
                        <li><a href="#">Email me</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <header-bar>
            <div class="slogan">Angular2 App</div>
        </header-bar>
        `,
    styles:[
        `
        .navbar-toggler{color:#ffffe0}
        `
    ]
})

export class Header {
    constructor() {}
}