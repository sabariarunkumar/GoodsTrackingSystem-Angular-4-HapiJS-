
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LeftgetComponent } from './leftget/leftget.component';
import { AppRoutingModule } from './/app-routing.module';
import { RightgetComponent } from './rightget/rightget.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerproductComponent } from './customerproduct/customerproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftgetComponent,
    RightgetComponent,
    CustomerproductComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
