import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<!-- Routed views go here --><router-outlet></router-outlet>'
})

export class AppComponent {
    hero:string = 'Windstorm';
    constructor(){
        console.log('I am a constructor method!');
    }
}