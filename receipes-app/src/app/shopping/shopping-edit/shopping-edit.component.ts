import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() emittedInput = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }

  addClicked(value : String){
    this.emittedInput.emit(value)
  }
}
