import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [{ path: 'game-profile', component: GameProfileComponent }, { path: '', component:HomeComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
