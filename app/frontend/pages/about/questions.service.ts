import {Injectable} from '@angular/core';

@Injectable()
export class QuestionsService {
    getItems(): any[] {
        return [
            {
                'title':'Question 1',
                'text':'Description 1'
            },
            {
                'title':'Question 2',
                'text':'Description 2'
            }
        ]
    }
}