import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MedCardComponent } from './components/med-card/med-card.component';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
import { FlowerWebPageComponent } from './components/flower-web-page/flower-web-page.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,GameProfileComponent,MedCardComponent,FlowerWebPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
