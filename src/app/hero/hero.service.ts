import { Injectable } from '@angular/core';
import { Hero } from "./hero"; 4
@Injectable()
export class HeroService {
  heros: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  constructor() { }
  getData() {

    return this.heros
  }

  getHero(id) {
    return this.heros.filter(item => item.id === id)[0];
  }

}
