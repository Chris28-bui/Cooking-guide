import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
