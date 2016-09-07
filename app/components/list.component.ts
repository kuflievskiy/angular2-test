
import { Component } from '@angular/core';
import {ListService} from "../services/list.service";

@Component({
  selector: 'list',
  templateUrl: 'app/components/list.component.html'
})

export class ListComponent {
    items : string[];
    constructor( listService:ListService ) {
        console.log('LIST COMPONENT : I am a constructor method!');

        this.items = listService.getItems();
        console.log(this.items);
    }
}