import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

const firebaseConfig = {
  apiKey: 'AIzaSyBqWKClS7zL1FwTmZbrjFR9oj4o1gVNKfY',
  authDomain: 'graduadoshomeapp.firebaseapp.com',
  databaseURL: 'https://graduadoshomeapp.firebaseio.com',
  projectId: 'graduadoshomeapp',
  storageBucket: 'graduadoshomeapp.appspot.com',
  messagingSenderId: '74539611815',
  appId: '1:74539611815:web:d1d1f4846a43534c4c0d82',
  measurementId: 'G-HLV14705N5'
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.15,
  maxScrollbarLength: 100
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
