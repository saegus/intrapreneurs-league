import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TileComponent } from './components/layouts/tile/tile.component';
import { TimelineComponent } from './components/organisms/timeline/timeline.component';
import { CircleImgComponent } from './components/atoms/circle-img/circle-img.component';
import { TileImageComponent } from './components/organisms/tile-image/tile-image.component';
import { JumboTileComponent } from './components/layouts/jumbo-tile/jumbo-tile.component';
import { ButtonComponent } from './components/atoms/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    TileComponent,
    TimelineComponent,
    CircleImgComponent,
    TileImageComponent,
    JumboTileComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
