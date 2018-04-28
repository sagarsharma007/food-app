import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './basic-Highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { MuchBetterHighlightDirective } from './much-better-highlight/much-better-highlight.directive';
import { DropdowndirectiveDirective } from './shared/dropdown/dropdowndirective.directive';
import { shoppingListService } from './shopping-list/sopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    MuchBetterHighlightDirective,
    DropdowndirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [shoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
