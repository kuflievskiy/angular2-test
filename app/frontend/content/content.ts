import {Component} from '@angular/core';
import {ContentService} from "./content.service";
import {Favorite} from "./favorite";
@Component({
    selector: 'content',
    templateUrl:'app/frontend/content/content.html'
})
export class Content {
    private items:any;
    constructor(contentService:ContentService) {
        this.items = contentService.getItems();
    }
}