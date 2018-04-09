import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  currentHero: Hero;

  @Output()
  helloClick = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private herosService: HeroService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.currentHero = this.herosService.getHero(parseInt(id));
    console.log(typeof id,id,this.currentHero);
  }
  lookHello(hello) {
    this.helloClick.emit(hello);
  }

  imgUrl = "http://www.baidu.com/img/bd_logo1.png"
}
