import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cocido', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido2', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido3', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido4', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido5', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
