import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MedCardComponent } from './components/med-card/med-card.component';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,GameProfileComponent,MedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
