import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MedCardComponent } from './components/med-card/med-card.component';
import { FlowerWebPageComponent } from './components/flower-web-page/flower-web-page.component';



const routes: Routes = [{ path: 'game-profile', component: GameProfileComponent },{ path: 'med-card', component: MedCardComponent },{ path: '', component:HomeComponent,pathMatch:'full'},{ path: 'flower-web-page', component:FlowerWebPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
