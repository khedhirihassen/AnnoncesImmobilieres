import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewAnnonceComponent } from './view-annonce/view-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAnnonceComponent,
    ViewAnnonceComponent,
    AddAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
