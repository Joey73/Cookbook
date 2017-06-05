import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Sushi',
            'Salmon Sushi',
            'https://upload.wikimedia.org/wikipedia/commons/f/f9/The_-1_lunch_combo.jpg',
            [
                new Ingredient('Salmon', 1),
                new Ingredient('Rice', 1)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFJ8O669E1dN4krsFowlbx3GiQ6-lOm2GbJr2BXqaPUZjgrKm',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}