import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableForEachComponent } from './components/table-for-each/table-for-each.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableForEachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DecimalPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
