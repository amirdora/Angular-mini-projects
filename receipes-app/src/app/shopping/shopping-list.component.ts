import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient("Capsicum", 1),
    new Ingredient("tomatos", 2)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addedItem(inputValue : string){
    new Ingredient(inputValue, 100),

    this.ingredients.push()
  }

}
