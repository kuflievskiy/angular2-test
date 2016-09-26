import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class GithubService {

    private _baseUrl = 'https://api.github.com/';
    private _usersPath = 'users/%username%';
    private _followersPath = 'users/%username%/followers';

    private _http;

    constructor(_http:Http ){
        this._http = _http;
    }
    getUser(userName): Observable<any[]> {
        return this._http.get(this._baseUrl + this._usersPath.replace('%username%',userName)).map(x=>{
            return (<any>x).json();
        });
    }

    getFollowers(userName): Observable<any[]>{
        return this._http.get(this._baseUrl + this._followersPath.replace('%username%',userName)).map(x=>{
            return (<any>x).json();
        });
    }
}