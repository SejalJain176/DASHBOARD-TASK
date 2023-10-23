import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopSectionComponent } from './top-section/top-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [], // Remove the MatIconRegistry provider
  bootstrap: [AppComponent]
})
export class AppModule { }
