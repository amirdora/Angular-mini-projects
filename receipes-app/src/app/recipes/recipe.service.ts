import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipeWasSelected = new EventEmitter<Recipe>()
    
    recipes: Recipe[] = [
        new Recipe(
            'Double Cheese Burger', 'Tasty try me!',
             'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',

            [new Ingredient("Bun", 1), 
            new Ingredient("Cow Meat", 2), 
            new Ingredient("Cheese", 2)]

            ),
        new Recipe(
            'Fish Burger',
             'It is fishy',
              'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
              [new Ingredient("Bun", 1), 
              new Ingredient("Fish slice", 1), 
              new Ingredient("Cheese", 1)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

}