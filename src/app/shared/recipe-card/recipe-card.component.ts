import {Component, Input, OnInit, Output} from '@angular/core';
import Item = firebase.analytics.Item;
import { EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ListDialogComponent} from '../list-dialog/list-dialog.component'

@Component({
  selector: 'recipe-custom-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {
  @Input() photoPath: string;
  @Input() title: string;
  @Input() ingredients: Array<string>; //TODO canviar a array de Products
  @Input() steps: Array<string>;

  @Output() event1 = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openIngredientDialog(): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      data: {
        title: this.title,
        list: this.ingredients,
      }
    });
  }

  openRecipeDialog(): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      data: {
        title: this.title,
        list: this.steps,
      }
    });
  }

  emmitEvent1(): void {
      this.event1.emit(this.title);
  }
}