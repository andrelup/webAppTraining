import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe [] = [
		new Recipe(
			'Tasty Schitzel',
			'A super-tasty Schnitzel - just awesome',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg/1024px-2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),			
		new Recipe(
			'Big Fat Burger',
			'What else you need to say?',
			'https://s3-sa-east-1.amazonaws.com/delivery-direto/img/items/59e6ccccbe73c.jpeg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	  ];
	getRecipes() {
		return this.recipes.slice();
	}
}
