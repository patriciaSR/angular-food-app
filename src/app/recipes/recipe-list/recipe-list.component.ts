import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cocido', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
    new Recipe('Cocido', 'cocidooooooooorrrrssss', 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
