import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'This is simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg', [
      new Ingredient('meat', 1),
      new Ingredient('french fries', 20)
    ]),
    // tslint:disable-next-line:max-line-length
   new Recipe('A test recipe', 'This is simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg', [
     new Ingredient('meat', 1),
     new Ingredient('fuck fries', 20)
   ])
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredient(ingredients);
  }
}
