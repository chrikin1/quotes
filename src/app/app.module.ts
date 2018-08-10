import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    QuoteComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
