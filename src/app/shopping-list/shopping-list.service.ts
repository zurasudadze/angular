import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10),
  ];
 getIngredients() {
   return this.ingredients.slice();
 }
 addIngredients(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
 }
 addIngredient(ingredients: Ingredient[]){
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.emit(this.ingredients.slice());
 }
}
