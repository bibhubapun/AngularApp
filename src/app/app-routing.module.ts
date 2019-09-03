import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  {path:'', redirectTo:'/front', pathMatch:'full' },
  {path:'front', component:FrontpageComponent},
  {path: 'detail/:vidid', component: ViewDetailsComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
