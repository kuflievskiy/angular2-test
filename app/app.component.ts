import { Component } from '@angular/core';
import {ListComponent} from "./components/list.component";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent {
    title:string = 'Tour of Heroes';
    hero:string = 'Windstorm';
    clickMessage = '';
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