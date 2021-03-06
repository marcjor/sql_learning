import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {HomeComponent} from '../components/home/home.component';
import {EasyComponent} from "../components/easy/easy.component";
import {EasyIntermediaireComponent} from "../components/easy-intermediaire/easy-intermediaire.component";

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'easy', component: EasyComponent},
  {path: 'inter', component: EasyIntermediaireComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
