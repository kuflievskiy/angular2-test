import {Component, OnInit} from '@angular/core';
import {HttpClassService} from "./http-class.service";
import {GithubService} from './github.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'http-class',
    template : `
        <div class="album text-muted">
            <div class="container">
                <div class="row">
                    <h2>HTTP class usage</h2>                    
                    isGithubProfileLoading : {{isGithubProfileLoading}}
                    <div *ngIf="isGithubProfileLoading">Getting data from the server(isGithubProfileLoading) ... </div>
                    <template *ngIf="!isGithubProfileLoading">                       
                        <div>
                            <img width="200px" src="{{githubProfileData[0].avatar_url}}">
                        </div>

                        <p>{{githubProfileData[0].email}}</p>
                        
                        <h4>Followers:</h4>
						<ul>
                            <li let followers = githubProfileData[1] *ngFor="let follower of followers, let i = index">
                            
                                {{i}}
                                
                                {{follower|json}}
                                <img width="200px" src="{{follower.avatar_url}}"/>
                                <a target="_blank" href="{{folower.url}}">{{follower.login}}</a>
                            </li>
                        </ul>
                        
                    </template>
                                                            
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

    public isGithubProfileLoading = true;
    public githubProfileData;

    constructor(httpClassService : HttpClassService, private githubService: GithubService ){
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

        var userName = 'kuflievskiy';
        var userObservable = this.githubService.getUser(userName);
        var followersObservable = this.githubService.getFollowers(userName);

        var forkedObservable = Observable.forkJoin(userObservable,followersObservable);
        forkedObservable.subscribe(x=>{
            this.githubProfileData = x;
            this.isGithubProfileLoading = false;
           console.log('forkedObservable');
           console.log(x);
        });
    }
}