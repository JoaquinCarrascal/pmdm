import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';

const routes: Routes = [
  {path: 'form' , component: PersonaFormComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
