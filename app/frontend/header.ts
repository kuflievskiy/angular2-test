import {Component} from '@angular/core';
import {Router} from "@angular/router";

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
<div class="navbar navbar-static-top navbar-dark bg-inverse">
    <div class="container-fluid">        
        <div class="col-xs-2">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">&#9776;</button>
            <a href="#" class="navbar-brand">Album</a>        
        </div>
        <div class="col-xs-10">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" routerLink="/" [class.active]="isActive('')">Home Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/admin" [class.active]="isActive('admin')">Admin Panel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/tweets" [class.active]="isActive('tweets')">Tweets</a>
              </li> 
            </ul>
        </div>
    </div>
</div>
`,
    styles:[
        `
        .navbar-toggler{color:#ffffe0}
        `
    ]
})
export class Header {
    router : Router;
    constructor(router:Router) {
        this.router = router;
    }

    isActive(slug): boolean {
        return this.router.isActive(slug,true);
    }
}