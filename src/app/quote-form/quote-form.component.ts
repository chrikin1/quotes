import { Component, OnInit } from '@angular/core';
import { Quote, QuoteList } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote = new Quote("", "", "");

  onSubmit() {
    QuoteList.push(this.quote);
    this.quote = new Quote("", "", "");
  }

  constructor() { }

  ngOnInit() {
  }

}
