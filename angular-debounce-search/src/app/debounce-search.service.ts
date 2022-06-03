import { Injectable } from '@angular/core';	
import { fromEvent } from 'rxjs';	
import {	
    debounceTime,	
    distinctUntilChanged,	
    filter,	
    map,	
} from 'rxjs/operators';	
@Injectable({	
    providedIn: 'root',	
})
export class DebounceSearchService {

    constructor() { }

    search(input: HTMLInputElement) {
        return fromEvent(input, 'keyup').pipe(	
            debounceTime(1000),

            // get value
            map((event: any) => { return event.target.value; })

            // if character length greater then 2
            , filter(res => res.length > 2)

            // If previous query is diffent from current   
            , distinctUntilChanged()

            // subscribe for response
        );
    }

}