import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { ImgUrlGeneratorPipe } from './pipes/img-url-generator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonBattleComponent,
    ImgUrlGeneratorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieComponent
  ],
  providers: [provideHttpClient(),
    provideLottieOptions({
    player: () => import('lottie-web'),
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
