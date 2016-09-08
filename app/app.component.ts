import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent {
    hero:string = 'Windstorm';
    constructor(){
        console.log('I am a constructor method!');
    }
}