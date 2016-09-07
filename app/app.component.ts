import { Component } from '@angular/core';
import {ListComponent} from "./components/list.component";

import {AppModel} from './app.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent {
    title:string = 'Tour of Heroes';
    hero:string = 'Windstorm';
    clickMessage = '';
    model:AppModel;
    constructor(){
        console.log('I am a constructor method!');
    }
    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }
    onHideMe(){
        this.clickMessage = '';
    }
}