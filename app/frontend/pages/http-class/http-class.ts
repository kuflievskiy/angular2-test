import {Component, OnInit} from '@angular/core';
import {HttpClassService} from "./http-class.service";

//import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'http-class',
    template : `
        <div class="album text-muted">
            <div class="container">
                <div class="row">
                    <h2>HTTP class usage</h2>
                    
                    <div *ngIf="isLoading">Getting data from the server ... </div>
                    {{posts|json}}
                </div>
            </div>
        </div>
        `,
    styles:[
        ``
    ]
})

export class HttpClass implements OnInit {
    private httpClassService;

    public posts;

    public isLoading = true;
    constructor(httpClassService : HttpClassService){
        this.httpClassService = httpClassService;
    }

    ngOnInit(){
        var postsObservable = this.httpClassService.getPosts();
        postsObservable
            .delay(2000)
            .subscribe(x=>{
            this.isLoading = false;
            this.posts = x;
            console.log(x);
        });


        var createPostObservable = this.httpClassService.createPost({
            userId:1,
            title:'title',
            body:'text body'
        });
        createPostObservable.subscribe(x=>{
            console.log('createPostObservable');
            console.log(x);
        });
    }
}