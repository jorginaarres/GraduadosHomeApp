import {Component, Input, OnInit, Output} from '@angular/core';
import Item = firebase.analytics.Item;
import { EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  emmitEvent1(): void {
    this.event1.emit(this.title);
  }
}
