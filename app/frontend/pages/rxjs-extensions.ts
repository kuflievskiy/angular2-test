import { Component, ElementRef, OnInit } from '@angular/core';
//import {Observable} from 'rxjs/Rx';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/mergeMap'; // flatMap
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';


declare var jQuery:any;
// npm install jquery --save-dev

@Component({
    selector: 'rx-code-here',
    template: `
        
        <input type="text" id="search" value="123"/>
`
})

export class RxExtensions implements OnInit {
    private element;
    constructor(element:ElementRef){
        this.element = element;
    }

    ngOnInit() {
        var keyUps = Observable.fromEvent(document.getElementById("search"), 'keyup',null,null)
            .map(e => e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm=>{
                // @todo : this code might be refactored
                // move this code into the spotifyService.searchArtists
                var url = 'https://api.spotify.com/v1/search?type=artist&q=' +searchTerm;
                var promiseObject = jQuery.getJSON(url);
                return Observable.fromPromise(promiseObject);
            });

        var subscription = keyUps.subscribe(data => {
            console.log(data);
        });

        //subscription.unsubscribe(); // cancelling subscription
    }
}