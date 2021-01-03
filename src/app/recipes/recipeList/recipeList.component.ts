import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-list',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {

  Recipe: Recipe[] = [
    {
      name: 'Rissotto de verdures',
      ingredients: ['Arrós - 400g','Ceba - 1', 'Alberginia - 1', 'Carbassó - 1', 'Parmesano - 200g', 'Caldo de verdures - 1l', 'Sal', 'Pebre negre', 'Oli oliva'],
      instructions: ['Tallar la verdura en cubs petits', 'Sofregir la ceba amb una mica de sal', 'Quan la ceba està daurada afegir el carbassó i la alberginia', 'Un cop estigui la durada afegir el caldo i esperar a que bulli', 'Bullir arrós durant 10 minuts', 'Afegur a poc a poc el parmesano i acabar de coure durant 5 minuts', 'Corregir de sal i afegir el pebre negre'],
      photo: 'https://www.recetasderechupete.com/wp-content/uploads/2019/11/Risotto-verduras-768x527.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  requestRecipe($event: any): void {
    console.log($event);
  }
}
