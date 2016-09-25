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
    constructor(httpClassService : HttpClassService){
        this.httpClassService = httpClassService;
    }

    ngOnInit(){
        var postsObservable = this.httpClassService.getPosts();
        postsObservable.subscribe(x=>{
            this.posts = x;
            console.log(x);
        });

        var createPostObservable = this.httpClassService.createPost({testname:'testvalue'});
        createPostObservable.subscribe(x=>{
            console.log('createPostObservable');
            console.log(x);
        });
    }
}