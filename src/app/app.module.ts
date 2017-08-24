import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockService } from "./stocks/stock.service";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ StockService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
