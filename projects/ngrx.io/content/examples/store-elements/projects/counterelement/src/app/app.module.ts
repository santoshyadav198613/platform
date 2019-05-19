import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterModule } from 'my-counter';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CounterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  ngDoBootstrap() {

  }

}
