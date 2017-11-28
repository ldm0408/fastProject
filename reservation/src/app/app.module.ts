import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContainerComponent } from './container.component';
import { IntroComponent } from './shop/intro/intro.component';
import { NavComponent } from './shop/nav/nav.component';
import { MainComponent } from './shop/main/main.component';
import { MapComponent } from './shop/map/map.component';
import { ReviewComponent } from './shop/review/review.component';
import { TitleComponent } from './shop/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    IntroComponent,
    NavComponent,
    MainComponent,
    MapComponent,
    ReviewComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule, FormsModule, ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
