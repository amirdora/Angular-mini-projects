import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class headerComponent {

    @Output() onMenuClicked = new EventEmitter<boolean>();

    setClickedValue(isShopping: boolean) {
        this.onMenuClicked.emit(isShopping)
    }
}