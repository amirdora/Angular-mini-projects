import { Recipe } from './recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() selectedRecipe : Recipe

  constructor() { }

  ngOnInit(): void {
  }

}
