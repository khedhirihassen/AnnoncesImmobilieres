import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewAnnonceComponent } from './view-annonce/view-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAnnonceComponent,
    ViewAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
