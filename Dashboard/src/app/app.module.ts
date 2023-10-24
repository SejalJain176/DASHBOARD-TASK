import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopSectionComponent } from './top-section/top-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import * as charts from 'fusioncharts/fusioncharts.charts';
import * as theme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopSectionComponent,
    BottomSectionComponent,
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [], // Remove the MatIconRegistry provider
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
