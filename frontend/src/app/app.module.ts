import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { EasyComponent } from './components/easy/easy.component';
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";
=======
import { EasyIntermediaireComponent } from './components/easy-intermediaire/easy-intermediaire.component';
>>>>>>> f3e465f9ab07ca594ba37c9e8041f31d672f92a1

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    EasyComponent,
    EasyIntermediaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
