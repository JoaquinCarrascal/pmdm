import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwapiCarCardListComponent } from './components/swapi-car-card-list/swapi-car-card-list.component';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SwapiPeoplelistComponent } from './components/swapi-peoplelist/swapi-peoplelist.component';


@NgModule({
  declarations: [
    AppComponent,
    SwapiCarCardListComponent,
    MenuComponent,
    PageNotFoundComponent,
    SwapiPeoplelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
