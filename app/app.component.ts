import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header></header>
        <!-- Routed views go here -->
        <router-outlet></router-outlet>
    <footer></footer>`
})

export class AppComponent {
    hero:string = 'Windstorm';
    constructor(){
        console.log('I am a constructor method!');
    }
}