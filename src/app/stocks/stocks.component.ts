import { Component, OnInit } from '@angular/core';
import { IStock } from "./stock";
import { StockService } from "./stock.service";


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: IStock[];
  pageTitle: string = "Stocks";
  errorMessage: string;
  constructor(private _stockService: StockService) { }

  ngOnInit() {
    this._stockService.getStocks()
    .subscribe(stocks => {
        this.stocks = stocks;
    },
        error => this.errorMessage = <any>error);
  }

}
