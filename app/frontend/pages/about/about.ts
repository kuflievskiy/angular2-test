import {Component} from '@angular/core';
import {QuestionsService} from "./questions.service";

@Component({
    selector: 'about',
    template : `
        <div class="album text-muted">
            <div class="container">
                <div class="row">
                    <h2>About page title</h2>
                    <div *ngIf="listOfQuestions.length > 0">
                        <zippy *ngFor="let item of listOfQuestions" [title]="item.title">{{item.text}}</zippy>
                    </div>
                </div>
            </div>
        </div>
        `,
    styles:[
        ``
    ]
})
export class About {
    private listOfQuestions:any;
    constructor( questionsService : QuestionsService ) {
        this.listOfQuestions = questionsService.getItems();
    }
}