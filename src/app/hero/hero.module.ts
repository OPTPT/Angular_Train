import { NgModule } from '@angular/core';
import { HeroComponent } from './hero-home/hero.component'
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule
  ],
  providers: [HeroService],
  exports: [HeroDetailComponent, HeroComponent],
  declarations: [HeroDetailComponent, HeroComponent, DashboardComponent]
})
export class HeroModule { }
