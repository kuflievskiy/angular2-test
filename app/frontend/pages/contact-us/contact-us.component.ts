import {Component} from '@angular/core';

@Component({
    selector: 'contact-us',
    templateUrl:'app/frontend/pages/contact-us/contact-us.html',
    styleUrls:['app/frontend/pages/contact-us/contact-us.css']
})
export class ContactUs {
    constructor(){}
    log(model){
        console.log(model);
    }
}