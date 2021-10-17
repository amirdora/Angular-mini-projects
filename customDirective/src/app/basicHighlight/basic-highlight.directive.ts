import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[appBasicHighlight]'
})

export class basicHighLightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
        this.elementRef.nativeElement.style.color = 'white'
        this.elementRef.nativeElement.style.padding = '10px'

    }

}