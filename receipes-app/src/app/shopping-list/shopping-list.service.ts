import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
      
      getIndredients(){
          return this.ingredients;
      }

      addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        console.log("ingredient added");
      }

      addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        console.log("all ingredients added");
      }
}