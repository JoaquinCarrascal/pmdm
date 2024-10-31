import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ImgUrlGeneratorPipe } from './pipes/img-url-generator.pipe';
import { BattleComponent } from './pages/battle/battle.component';
import { PokemonRandomizerPipe } from './pipes/pokemon-randomizer.pipe';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    PokemonRandomizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieComponent
  ],
  providers: [provideHttpClient(), 
            ImgUrlGeneratorPipe, 
            PokemonRandomizerPipe,
            provideLottieOptions({
              player: () => import('lottie-web'),
            }),],
  bootstrap: [AppComponent]
})
export class AppModule { }
