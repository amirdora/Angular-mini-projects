import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe("Test receipe 1", "description", "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-09-Pineapple-Fried-Rice%2Fpineapple-fried-rice-1"),
    new Recipe("Test receipe 2", "description", "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-09-Pineapple-Fried-Rice%2Fpineapple-fried-rice-1")
  ]

  constructor() { }

  ngOnInit(): void {
  }
  passRecipeToParent(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
