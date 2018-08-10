import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes[
    new Quote(1,'Your dreams are valid'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
