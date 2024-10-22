import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwapiCarCardListComponent } from './components/swapi-car-card-list/swapi-car-card-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SwapiPeoplelistComponent } from './components/swapi-peoplelist/swapi-peoplelist.component';


const routes: Routes = [
  
  { path: 'vehicles', component: SwapiCarCardListComponent },
  { path: 'people', component: SwapiPeoplelistComponent },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
