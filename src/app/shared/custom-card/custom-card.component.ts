import {Component, Input, OnInit, Output} from '@angular/core';
import Item = firebase.analytics.Item;
import { EventEmitter } from '@angular/core';
import {InfoDialogComponent} from '../info-dialog/info-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() photoPath: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() status: boolean;
  @Input() date: string;

  @Output() event1 = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openInfoDialog(): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      data: {
        photoPath: this.photoPath,
        title: this.title,
        subtitle: this.subtitle,
        description: this.description,
        status: this.status,
        date: this.date,
      }
    });
  }

  emmitEvent1(): void {
    this.event1.emit(this.title);
  }
}
