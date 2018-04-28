import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe("Test name1",
                 "Test Desc1", 
                 "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
                [
                    new Ingredient('Meat',1),
                    new Ingredient('French Fries',10)
                ]),
        new Recipe("Test name2",
                    "Test Desc2",
                    "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
                [
                    new Ingredient('Bun',5),
                    new Ingredient('Drinks',20)
                ]),
                    
    
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}