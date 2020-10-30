import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomCardComponent } from './custom-card/custom-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [
    HeaderComponent,
    CustomCardComponent,
    InfoDialogComponent],
  exports: [
    HeaderComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PerfectScrollbarModule
  ]
})
export class SharedModule { }
