import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClassService {

    private _url = "http://jsonplaceholder.typicode.com/posts";
    private _http;

    constructor(_http:Http ){
        this._http = _http;
    }
    getPosts(): any[] {
        return this._http.get(this._url).map(res=>{
            return (<any>res).json();
        });
    }
    createPost(post){
        return this._http.post(this._url,JSON.stringify(post))
            .map(res=>{
                return res.json();
            })
    }
}