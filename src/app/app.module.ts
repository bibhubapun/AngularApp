import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiDataService } from './api-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FrontpageComponent, SafePipe } from './frontpage/frontpage.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SafePipe,
    ViewDetailsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
