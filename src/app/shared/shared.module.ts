import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomCardComponent } from './custom-card/custom-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, CustomCardComponent],
  exports: [
    HeaderComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class SharedModule { }
