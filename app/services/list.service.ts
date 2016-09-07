import { Injectable } from '@angular/core';


@Injectable()
export class ListService {
    getItems(): string[] {
        return ['Item 1','Item 2', 'Item3'];
    };
}