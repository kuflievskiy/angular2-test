import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'header-bar',
    template:`
        <div class="navbar navbar-static-top navbar-dark bg-inverse">
            <div class="container-fluid">        
                <div class="col-xs-2">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">&#9776;</button>
                    <a routerLink="/" class="navbar-brand">
                        <ng-content select=".slogan"></ng-content>
                    </a>
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
        `
})

export class HeaderBar {
    router : Router;
    constructor(router:Router) {
        this.router = router;
    }

    isActive(slug): boolean {
        return this.router.isActive(slug,true);
    }
}