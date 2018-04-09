import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroModule } from "./hero/hero.module";

import { RouterModule, Routes } from '@angular/router'
import { HeroComponent } from './hero/hero-home/hero.component';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
const heros: Routes = [
  {
    path: 'heros',
    component: HeroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(heros),

    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
