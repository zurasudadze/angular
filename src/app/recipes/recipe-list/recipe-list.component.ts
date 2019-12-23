import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'This is simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Second test recipe', 'This is simply a  sadsa dasd sa sa test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
