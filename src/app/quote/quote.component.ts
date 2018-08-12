import { Component, OnInit } from '@angular/core';
import {Quote, QuoteList} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['../app.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = QuoteList;

  upvoteQuote(id) {
    this.quotes[id-1].quoteUpvotes+=1;
  }

  downvoteQuote(id) {
    this.quotes[id-1].quoteDownvotes+=1;
  }

  toggleDetail(id) {
    this.quotes[id-1].detailsVisible = !this.quotes[id].detailsVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}
