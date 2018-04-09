import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroService } from "../hero.service";
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @ViewChild(HeroDetailComponent)
  detail: HeroDetailComponent;

  heros: Hero[]

  hero: Hero;

  handerClick(data) {
    // this.hero = data;
    
  }
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heros = this.heroService.getData()
  }

  lookDetail() {
    console.log('father get:' + this.detail);
  }
  helloClick(hello) {
    console.log(hello)
  }

}
