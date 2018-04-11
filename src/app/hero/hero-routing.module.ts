import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero-home/hero.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

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
    CommonModule,
    RouterModule.forChild(heros),
  ],
  exports : [RouterModule]
  
})
export class HeroRoutingModule { }
