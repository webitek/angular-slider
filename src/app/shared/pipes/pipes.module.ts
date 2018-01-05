import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedCurrencyPipe } from './localized-currency.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    LocalizedCurrencyPipe
  ],
  exports: [
    LocalizedCurrencyPipe
  ]
})
export class PipesModule { }
