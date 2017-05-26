import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}