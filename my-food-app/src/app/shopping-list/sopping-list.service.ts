import {Ingredient} from '../shared/ingredient.model';

import {EventEmitter} from '@angular/core';

export class shoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
  private  ingredients : Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("banana", 15),
      ];

      getIngredients() {
          return this.ingredients;
      }
      addIngredient(ingredient:Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
    
}